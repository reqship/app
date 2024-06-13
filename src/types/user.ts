export interface User {
  id: number;
  username: string;
  email: string;
  password?: string;
}

export interface LoginUser {
  username: string;
  password: string;
}
