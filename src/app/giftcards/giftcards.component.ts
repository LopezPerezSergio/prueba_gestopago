import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { tarjetasData } from '../../data/tarjetas';
import { GestoPagoService } from '../ServiceConsumerAPI/gestopago/gesto-pago.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-giftcards',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './giftcards.component.html',
  styleUrl: './giftcards.component.css'
})

export class GiftcardsComponent {
  checkoutForm: FormGroup;

  tarjetas = tarjetasData; // Hacemos los datos accesibles al template

  selectedCompania: string = '';
  selectedTarjet: string = '';

  constructor(private fb: FormBuilder, private GestoPagoService: GestoPagoService, private toastr: ToastrService) {
    this.checkoutForm = this.fb.group({
      company: ['', Validators.required],
      tarjet: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.checkoutForm.get('company')?.valueChanges.subscribe(value => {
      console.log('La compañía seleccionada ha cambiado a:', value);
      // Realiza acciones adicionales aquí cuando la compañía cambie
    });
    this.checkoutForm.get('tarjet')?.valueChanges.subscribe(value => {
      console.log('La tarjeta seleccionada ha cambiado a:', value);
      // Realiza acciones adicionales aquí cuando la compañía cambie
    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      var transactionData;
      let mensaje = '';

      this.tarjetas.forEach(tarjeta => {
        if (tarjeta.idServicio === this.selectedCompania && tarjeta.idProducto === this.selectedTarjet) {
          transactionData = {
            idProducto: parseInt(tarjeta.idProducto, 10),
            idServicio: parseInt(tarjeta.idServicio, 10),
            idCatTipoServicio: tarjeta.idCatTipoServicio,
            tipoFront: tarjeta.tipoFront,
          };
          mensaje = tarjeta.legend;
        }
      });

      this.GestoPagoService.sendTransaction(transactionData).subscribe(
        (response) => {
          if (response.success) {

            if (response.data.MENSAJE.CODIGO === '01') {
              this.checkoutForm.reset(); 
              this.toastr.success(mensaje, 'Tarjeta adquirida con Exito!');
            }

            switch (response.data.MENSAJE.CODIGO) {
              case '02':
              case '03':
              case '70':
                this.toastr.error('Hubo un problema, comuníquelo a Soporte si el fallo persiste', 'Error!');
                break;
              case '04':
              case '06':
              case '55':
              case '82':
                this.toastr.warning(response.data.MENSAJE.TEXTO, 'Precaucion!');
                break;
            }

          } else {
            this.toastr.error('Numero o referencia incorrecto, por favor valida tus datos', 'Error!');
          }
          console.log("Transaction successful:", response);
          return response; // Retorna la respuesta original
        },
        (error) => {
          this.toastr.error('Tarjeta no adquirida, por favor valida tus datos', 'Error!');
          console.error("Transaction error:", error);
        }
      );

    }
    else{
      this.toastr.warning('Verifique los campos', 'Precaucion!');
      console.log("Transaction successful:", "Validar los campos");
    }
  }
}
