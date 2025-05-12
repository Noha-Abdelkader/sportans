export type LoggedUser = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
};

// export type LoginResponse = Pick<User ,

//         "id"|
//         "username"|
//         "email"|
//         "firstName"|
//         "lastName"|
//         "gender"|
//         "image"|
//         "accessToken"|
//         "refreshToken"

// >;
export type LoginResponse = LoggedUser;
export type RegisterResponse = Pick<
  LoggedUser,
  "id" | "firstName" | "lastName" | "age"
>;
