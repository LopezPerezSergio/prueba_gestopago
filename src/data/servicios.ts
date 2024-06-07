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

export const servicioData: Service[] = [
    {
        servicio: "Telmex",
        producto: "Consulta de Saldo",
        idServicio: "107",
        idProducto: "7270",
        idCatTipoServicio: "5",
        tipoFront: 4,
        hasDigitoVerificador: true,
        precio: 0,
        showAyuda: true,
        tipoReferencia: "a",
        legend: "Para cualquier duda o aclaracion con tu pago, comunicate al servicio de Atencion a Clientes TELMEX al telefono 01 800 123 0000 opcion 2 donde te pediran ingresar tu numero de telefono y a continuacion la opcion 4 para validar tu saldo. No olvides consevar tu comprobante de pago.Tu pago se vera reflejado en un lapso de 24hrs habiles."
    },
    {
        servicio: "Telmex",
        producto: "Telmex",
        idServicio: "107",
        idProducto: "271",
        idCatTipoServicio: "5",
        tipoFront: 2,
        hasDigitoVerificador: true,
        precio: 10,
        showAyuda: true,
        tipoReferencia: "b",
        legend: "Para cualquier duda o aclaracion con tu pago, comunicate al servicio de Atencion a Clientes TELMEX al telefono 01 800 123 0000 opcion 2 donde te pediran ingresar tu numero de telefono y a continuacion la opcion 4 para validar tu saldo. No olvides consevar tu comprobante de pago.Tu pago se vera reflejado en un lapso de 24hrs habiles."
    },

    {
        servicio: "CFE",
        producto: "Consulta de Saldo",
        idServicio: "166",
        idProducto: "7357",
        idCatTipoServicio: "5",
        tipoFront: 4,
        hasDigitoVerificador: true,
        precio: 0,
        showAyuda: true,
        tipoReferencia: "b",
        legend: "Para cualquier duda o aclaracion con el pago de tu recibo de CFE favor de llamar al telefono (55) 90001758 o enviar un correo electronico a contacto@gestopago.com. No olvides guardar tu comprobante de pago. Tu pago se vera reflejado en un lapso de 24hrs habiles."
    },
    {
        servicio: "CFE",
        producto: "CFE",
        idServicio: "166",
        idProducto: "597",
        idCatTipoServicio: "5",
        tipoFront: 2,
        hasDigitoVerificador: true,
        precio: 8,
        showAyuda: true,
        tipoReferencia: "bc",
        legend: "Para cualquier duda o aclaracion con el pago de tu recibo de CFE favor de llamar al telefono (55) 90001758 o enviar un correo electronico a contacto@gestopago.com. No olvides guardar tu comprobante de pago. Tu pago se vera reflejado en un lapso de 24hrs habiles."
    },
];
