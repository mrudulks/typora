export interface UserPostBody {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    age?: number;
}

export interface UserResponse {
    id: string;
    name: string;
    email: string;
    age: number;
}

export interface User {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
}
