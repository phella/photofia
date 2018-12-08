export class User {
    constructor(
        public firstname: string,
        public lastname: string,
        public email: string,
        public phone: number,
        public pass: string,
        public gender: string,
        public city: string,
        public bd: Date,
        public customer: string
    ) {

    }
}
