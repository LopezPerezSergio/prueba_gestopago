import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GestoPagoService {

  private apiUrl = environment.URL_SERVICIOS; // Replace with your actual API URL
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  sendTransaction(transactionData: any): Observable<any> { // Assuming your API expects an object for transaction data
    return this.http.post<any>(this.apiUrl + '/gestopago/sendTx', transactionData);
  }
}

