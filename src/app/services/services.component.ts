import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { servicioData } from '../../data/servicios';
import { GestoPagoService } from '../ServiceConsumerAPI/gestopago/gesto-pago.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})

export class ServicesComponent {

  checkoutForm: FormGroup;

  servicios = servicioData; // Hacemos los datos accesibles al template

  selectedCompania: string = '';

  constructor(private fb: FormBuilder, private GestoPagoService: GestoPagoService, private toastr: ToastrService) {
    this.checkoutForm = this.fb.group({
      company: ['', Validators.required],
      pay: ['', Validators.nullValidator],
      reference: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]] // 10-digit phone validation
    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      var transactionData;
      var mensaje = '';
      this.servicios.forEach(servicio => {
        if (servicio.idServicio === this.selectedCompania && servicio.idProducto === '271') {
          transactionData = {
            idProducto: parseInt(servicio.idProducto, 10),
            idServicio: parseInt(servicio.idServicio, 10),
            referencia: this.checkoutForm.value.reference,
            montoPago: this.checkoutForm.value.pay,
            idCatTipoServicio: servicio.idCatTipoServicio,
            tipoFront: servicio.tipoFront,
          };
          mensaje = servicio.legend;
        }

        if (servicio.idServicio === this.selectedCompania && servicio.idProducto === '597') {
          transactionData = {
            idProducto: parseInt(servicio.idProducto, 10),
            idServicio: parseInt(servicio.idServicio, 10),
            referencia: this.checkoutForm.value.reference,
            montoPago: this.checkoutForm.value.pay,
            idCatTipoServicio: servicio.idCatTipoServicio,
            tipoFront: servicio.tipoFront,
          };
          mensaje = servicio.legend;
        }
      });


      this.GestoPagoService.sendTransaction(transactionData).subscribe(
        (response) => {
          if (response.success) {

            if (response.data.MENSAJE.CODIGO === '01') {
              this.checkoutForm.reset();
              this.toastr.success(mensaje, 'Exito!');
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
          this.toastr.error('Numero o referencia incorrecto, por favor valida tus datos', 'Error!');
          console.error("Transaction error:", error);
        }
      );

    }
    else {
      this.toastr.warning('Verifique los campos', 'Precaucion!');
      console.log("validacion:", "Validar los campos");
    }


  }

  checkBalance() {
    if (this.checkoutForm.valid) {
      var transactionData;

      this.servicios.forEach(servicio => {
        if (servicio.idServicio === this.selectedCompania && servicio.idProducto === '7270') {
          transactionData = {
            idProducto: parseInt(servicio.idProducto, 10),
            idServicio: parseInt(servicio.idServicio, 10),
            referencia: this.checkoutForm.value.reference,
            idCatTipoServicio: servicio.idCatTipoServicio,
            tipoFront: servicio.tipoFront,
          };
        }

        if (servicio.idServicio === this.selectedCompania && servicio.idProducto === '7357') {
          transactionData = {
            idProducto: parseInt(servicio.idProducto, 10),
            idServicio: parseInt(servicio.idServicio, 10),
            referencia: this.checkoutForm.value.reference,
            idCatTipoServicio: servicio.idCatTipoServicio,
            tipoFront: servicio.tipoFront,
          };
        }
      });


      this.GestoPagoService.sendTransaction(transactionData).subscribe(
        (response) => {
          if (response.success) {
            let mensaje = 'Consulta de saldo realizada satisfactoriamente';

            if (response.data.MENSAJE.CODIGO === '01') {
              this.checkoutForm?.get('pay')?.setValue(response?.data?.MENSAJE?.SALDOCLIENTE ?? '');
              this.toastr.success(mensaje, 'Exito!');
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
          this.toastr.error('Numero o referencia incorrecto, por favor valida tus datos', 'Error!');
          console.error("Transaction error:", error);
        }
      );

    }
    else {
      this.toastr.warning('Verifique los campos', 'Precaucion!');
      console.log("validacion:", "Validar los campos");
    }

  }
}
