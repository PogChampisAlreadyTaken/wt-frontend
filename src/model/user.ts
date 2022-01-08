export interface User {
    id: String;
    name: String;
    email: String;
    friends?: User[];
    photourl?: String;
}


export function emptyUser(): User {
    return {
        id: "",
        name: "",
        email: ""
    }
}