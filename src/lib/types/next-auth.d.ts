import { LoggedUser } from './auth.d';

import  { User } from "next-auth";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt";
import { LoggedUser } from "./auth";


declare module "next-auth" {
  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
user: LoggedUser
  }


  interface Session{
   user : Omit<User , 'gender'>
  }


}


declare module "next-auth/jwt"{
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface JWT extends User {}
}
