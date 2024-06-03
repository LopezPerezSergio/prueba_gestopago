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

export const recargaData: Service[] = [
    {
        servicio: "Telcel",
        producto: "Recarga $100",
        idServicio: "133",
        idProducto: "406",
        idCatTipoServicio: "2",
        tipoFront: 1,
        hasDigitoVerificador: true,
        precio: 100,
        showAyuda: true,
        tipoReferencia: "a",
        legend: "ESTIMADO CLIENTE RECUERDA QUE PUEDES CONSULTAR TU SALDO SIN COSTO MARCANDO  AL *133# DESDE TU TELCEL."
    },
    {
        servicio: "Telcel",
        producto: "Recarga $150",
        idServicio: "133",
        idProducto: "407",
        idCatTipoServicio: "2",
        tipoFront: 1,
        hasDigitoVerificador: true,
        precio: 150,
        showAyuda: true,
        tipoReferencia: "a",
        legend: "ESTIMADO CLIENTE RECUERDA QUE PUEDES CONSULTAR TU SALDO SIN COSTO MARCANDO  AL *133# DESDE TU TELCEL."
    },
    {
        servicio: "Telcel",
        producto: "Recarga $200",
        idServicio: "133",
        idProducto: "408",
        idCatTipoServicio: "2",
        tipoFront: 1,
        hasDigitoVerificador: true,
        precio: 200,
        showAyuda: true,
        tipoReferencia: "a",
        legend: "ESTIMADO CLIENTE RECUERDA QUE PUEDES CONSULTAR TU SALDO SIN COSTO MARCANDO  AL *133# DESDE TU TELCEL."
    }
];