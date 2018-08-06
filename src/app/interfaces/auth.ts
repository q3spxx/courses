export interface LoginData {
    token: string
}
export interface UserData {
    id: number,
    fakeToken: string,
    name: {
        first: string,
        last: string
    },
    login: string,
    password: string
}
export class User {
    id: number;
    firstName: string;
    lastName: string;
    constructor(_id: number, _firstName: string, _lastName: string) {
        this.id = _id;
        this.firstName = _firstName;
        this.lastName = _lastName;
    }
}