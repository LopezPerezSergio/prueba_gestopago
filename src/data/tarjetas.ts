export interface Service {
    servicio: string;
    producto: string;
    idServicio: string;
    idProducto: string;
    idCatTipoServicio: string;
    tipoFront: number;
    hasDigitoVerificador: boolean;
    precio: number;
    showAyuda: boolean;
    tipoReferencia: string;
    legend: string;
}

export const tarjetasData: Service[] = [
    {
        servicio: 'Google Play',
        producto: 'Google Play $100',
        idServicio: '669', 
        idProducto: '5611',
        idCatTipoServicio: '10',
        tipoFront: 1,
        hasDigitoVerificador: true,
        precio: 100,
        showAyuda: true,
        tipoReferencia: 'a',
        legend: 'Usa el codigo de esta tarjeta de regalo solamente en Google Play. Cualquier otra solicitud para usar el codigo podria ser un fraude. Visita play.google.com/giftcardscam. Para acceder a los Terminos y la Politica de Privacidad, visite play.google.com/mx-card-terms. Para obtener ayuda o ver el saldo de la tarjeta, visite support.google.com/googleplay/go/cardhelp.'
      },
      {
        servicio: 'Google Play',
        producto: 'Google Play $200',
        idServicio: '669',
        idProducto: '7755',
        idCatTipoServicio: '10',
        tipoFront: 1,
        hasDigitoVerificador: true,
        precio: 200,
        showAyuda: true,
        tipoReferencia: 'a',
        legend: 'Usa el codigo de esta tarjeta de regalo solamente en Google Play. Cualquier otra solicitud para usar el codigo podria ser un fraude. Visita play.google.com/giftcardscam. Para acceder a los Terminos y la Politica de Privacidad, visite play.google.com/mx-card-terms. Para obtener ayuda o ver el saldo de la tarjeta, visite support.google.com/googleplay/go/cardhelp.'
      },
      {
        servicio: 'Google Play',
        producto: 'Google Play $300',
        idServicio: '669',
        idProducto: '7758',
        idCatTipoServicio: '10',
        tipoFront: 1,
        hasDigitoVerificador: true,
        precio: 300,
        showAyuda: true,
        tipoReferencia: 'a',
        legend: 'Usa el codigo de esta tarjeta de regalo solamente en Google Play. Cualquier otra solicitud para usar el codigo podria ser un fraude. Visita play.google.com/giftcardscam. Para acceder a los Terminos y la Politica de Privacidad, visite play.google.com/mx-card-terms. Para obtener ayuda o ver el saldo de la tarjeta, visite support.google.com/googleplay/go/cardhelp.'
      },

      {
        servicio: "Netflix",
        producto: "Netflix $300",
        idServicio: "178",
        idProducto: "7030",
        idCatTipoServicio: "11",
        tipoFront: 1,
        hasDigitoVerificador: true,
        precio: 300,
        showAyuda: true,
        tipoReferencia: "a",
        legend: "Para comenzar a ver: 1. Visita www.netflix.com/codigo 2. Ingresa el codigo  No reembolsable. Terminos en www.netflix.com.mx/terminostarjeta"
    },
    {
        servicio: "Netflix",
        producto: "Netflix $400",
        idServicio: "178",
        idProducto: "10331",
        idCatTipoServicio: "11",
        tipoFront: 1,
        hasDigitoVerificador: true,
        precio: 400,
        showAyuda: true,
        tipoReferencia: "a",
        legend: "Para comenzar a ver: 1. Visita www.netflix.com/codigo 2. Ingresa el codigo  No reembolsable. Terminos en www.netflix.com.mx/terminostarjeta"
    },
    {
        servicio: "Netflix",
        producto: "Netflix $500",
        idServicio: "178",
        idProducto: "7459",
        idCatTipoServicio: "11",
        tipoFront: 1,
        hasDigitoVerificador: true,
        precio: 500,
        showAyuda: true,
        tipoReferencia: "a",
        legend: "Para comenzar a ver: 1. Visita www.netflix.com/codigo 2. Ingresa el codigo  No reembolsable. Terminos en www.netflix.com.mx/terminostarjeta"
    }
];