import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GestoPagoService } from '../ServiceConsumerAPI/gestopago/gesto-pago.service';
import { recargaData } from '../../data/recargas';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recharges',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './recharges.component.html',
  styleUrl: './recharges.component.css'
})

export class RechargesComponent implements OnInit {
  checkoutForm: FormGroup;

  recargas = recargaData; // Hacemos los datos accesibles al template

  selectedCompania: string = '';
  selectedPackage: string = '';

  constructor(private fb: FormBuilder, private GestoPagoService: GestoPagoService) {
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

      this.recargas.forEach(recarga => {
        if (recarga.idServicio === this.selectedCompania && recarga.idProducto === this.selectedPackage) {
          transactionData = {
            idProducto: recarga.idProducto,
            idServicio: recarga.idServicio,
            telefono: this.checkoutForm.value.phone,
            idCatTipoServicio: recarga.idCatTipoServicio,
            tipoFront: recarga.tipoFront,
          };
        }
      });

      console.log("Transaction successful:", transactionData);

      /* this.GestoPagoService.sendTransaction(transactionData).subscribe(
        (response) => {
          // Handle successful transaction (e.g., display confirmation, redirect)
          console.log("Transaction successful:", response);
        },
        (error) => {
          // Handle transaction errors (e.g., display error message)
          console.error("Transaction error:", error);
        }
      ); */
    }
  }
}
