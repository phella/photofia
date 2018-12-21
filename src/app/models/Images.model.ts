export class Images {
    constructor(
        public path: string,
        public type: string,
        public rate: number,
        public description: string,
        public date: Date ,
        public photographerEmail: string,
        public imageLocation: string,
        public photographerName: string
    ) {
    }
}
