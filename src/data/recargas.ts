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
    },

    {
        servicio: "AT-T",
        producto: "Recarga $100",
        idServicio: "115",
        idProducto: "299",
        idCatTipoServicio: "3",
        tipoFront: 1,
        hasDigitoVerificador: true,
        precio: 100,
        showAyuda: true,
        tipoReferencia: "a",
        legend: "ESTIMADO CLIENTE EN CASO DE PRESENTARSE ALGUN PROBLEMA CON SU COMPRA DE TIEMPO AIRE FAVOR DE COMUNICARSE AL NUMERO DE ATENCION A CLIENTES  *611 DESDE SU IUSACELL O AL  01 800 333 0611 DESDE EL INTERIOR DE LA REPUBLICA."
    },
    {
        servicio: "AT-T",
        producto: "Recarga $150",
        idServicio: "115",
        idProducto: "300",
        idCatTipoServicio: "3",
        tipoFront: 1,
        hasDigitoVerificador: true,
        precio: 150,
        showAyuda: true,
        tipoReferencia: "a",
        legend: "ESTIMADO CLIENTE EN CASO DE PRESENTARSE ALGUN PROBLEMA CON SU COMPRA DE TIEMPO AIRE FAVOR DE COMUNICARSE AL NUMERO DE ATENCION A CLIENTES  *611 DESDE SU IUSACELL O AL  01 800 333 0611 DESDE EL INTERIOR DE LA REPUBLICA."
    },
    {
        servicio: "AT-T",
        producto: "Recarga $200",
        idServicio: "115",
        idProducto: "301",
        idCatTipoServicio: "3",
        tipoFront: 1,
        hasDigitoVerificador: true,
        precio: 200,
        showAyuda: true,
        tipoReferencia: "a",
        legend: "ESTIMADO CLIENTE EN CASO DE PRESENTARSE ALGUN PROBLEMA CON SU COMPRA DE TIEMPO AIRE FAVOR DE COMUNICARSE AL NUMERO DE ATENCION A CLIENTES  *611 DESDE SU IUSACELL O AL  01 800 333 0611 DESDE EL INTERIOR DE LA REPUBLICA."
    },

    {
        servicio: "ABIB",
        producto: "ABIB 100 15 DIAS",
        idServicio: "2284",
        idProducto: "18105",
        idCatTipoServicio: "13",
        tipoFront: 1,
        hasDigitoVerificador: true,
        precio: 100,
        showAyuda: true,
        tipoReferencia: "a",
        legend: "¡El futuro es hoy!, Viaja sin limites con cobertura en todo Mexico, Estados Unidos y Canada."
    },
    {
        servicio: "ABIB",
        producto: "ABIB 150",
        idServicio: "2284",
        idProducto: "14314",
        idCatTipoServicio: "13",
        tipoFront: 1,
        hasDigitoVerificador: true,
        precio: 150,
        showAyuda: true,
        tipoReferencia: "a",
        legend: "¡El futuro es hoy!, Viaja sin limites con cobertura en todo Mexico, Estados Unidos y Canada."
    },
    {
        servicio: "ABIB",
        producto: "ABIB 15GB ILIM 30D ",
        idServicio: "2284",
        idProducto: "18109",
        idCatTipoServicio: "13",
        tipoFront: 1,
        hasDigitoVerificador: true,
        precio: 200,
        showAyuda: true,
        tipoReferencia: "a",
        legend: "¡El futuro es hoy!, Viaja sin limites con cobertura en todo Mexico, Estados Unidos y Canada."
    },
];