import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GestoPagoService } from '../ServiceConsumerAPI/gestopago/gesto-pago.service';
import { recargaData } from '../../data/recargas';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recharges',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './recharges.component.html',
  styleUrl: './recharges.component.css'
})

export class RechargesComponent implements OnInit {
  checkoutForm: FormGroup;

  recargas = recargaData; // Hacemos los datos accesibles al template

  selectedCompania: string = '';
  selectedPackage: string = '';

  constructor(private fb: FormBuilder, private GestoPagoService: GestoPagoService, private toastr: ToastrService) {
    this.checkoutForm = this.fb.group({
      company: ['', Validators.required],
      package: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]] // 10-digit phone validation
    });
  }

  ngOnInit() {
    this.checkoutForm.get('company')?.valueChanges.subscribe(value => {
      console.log('La compañía seleccionada ha cambiado a:', value);
      // Realiza acciones adicionales aquí cuando la compañía cambie
    });
    this.checkoutForm.get('package')?.valueChanges.subscribe(value => {
      console.log('El paquete seleccionada ha cambiado a:', value);
      // Realiza acciones adicionales aquí cuando la compañía cambie
    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      var transactionData;
      let mensaje = '';

      this.recargas.forEach(recarga => {
        if (recarga.idServicio === this.selectedCompania && recarga.idProducto === this.selectedPackage) {
          transactionData = {
            idProducto: parseInt(recarga.idProducto, 10),
            idServicio: parseInt(recarga.idServicio, 10),
            telefono: this.checkoutForm.value.phone,
            idCatTipoServicio: recarga.idCatTipoServicio,
            tipoFront: recarga.tipoFront,
          };
          mensaje = recarga.legend;
        }
      });

      this.GestoPagoService.sendTransaction(transactionData).subscribe(
        (response) => {
          if (response.success) {

            if (response.data.MENSAJE.CODIGO === '01') {
              this.checkoutForm.reset(); 
              this.toastr.success(mensaje, 'Reacarga realizada!');
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
          this.toastr.error('Recarga no aplicada, por favor valida tus datos', 'Error!');
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
