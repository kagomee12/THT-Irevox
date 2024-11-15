export enum Role {
    admin = "admin",
    user = "user"
}
export type TUser = {
    id: number;
    username: string;
    password: string;
    role: Role;
}
