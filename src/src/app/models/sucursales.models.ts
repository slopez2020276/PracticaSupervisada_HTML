export class sucursales{
    constructor(
        public nombre: string,
        public direccion: string,
        public imagen: string,
        public usuario:[{
            idEmpresa: string
        }]
   ){

    }
}