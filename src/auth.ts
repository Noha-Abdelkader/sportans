import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { JSON_HEADER } from "./lib/constants/api.constant";
// import { API_Response } from "./lib/types/api-response";
// import { LoginResponse } from "./lib/types/auth";
import { catchError } from "./lib/utils/catch-error";
// import { API_Response, Success_response } from "./lib/types/api-response";
// import { LoginResponse } from "./lib/types/auth";

// loged in function
async function signInFunc(credentails: { email: string; password: string }) {
  const response = await fetch(process.env.BASE_URL_DUMMY + "/user/login", {
    method: "POST",
    headers: { ...JSON_HEADER },
    body: JSON.stringify({
      email: credentails?.email,
      password: credentails?.password,
      expiresInMins: 10,
    }),
  });

  const payload = await response.json();
  // console.log(payload, "paaaaaaaaaylllllllllllllll");
// return;
  if (payload.status && payload.status !== 200) {
    throw new Error("Login Failed, please try again ...");
  }

  return payload;
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/",
    signOut: "/",
    error:"/"
  },
  providers: [
    Credentials({
      name: "login credential",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credential) => {
        if (!credential) throw Error("Credential inputs is required !!!");
        const [response, error] = await catchError(signInFunc(credential));
          // console.log(signInFunc(credential), "payyylooooooooood");

        // return 50;
        if (error) {
          throw Error(error.message ?? "Failed login, please try again..");
        }
        return response;
      },

      //   // throw error in case failed
      //   if (
      //     "code" in payload ||
      //     (payload.status && payload.status == 400) ||
      //     "message" in payload
      //   ) {
      //     throw new Error("Failed to login, please try again.");
      //   }
      //   console.log(payload, "payyylooooooooood");
      //   return null;
      //   // case success
      //   return {
      //     id: String(payload.status),
      //     email: credentials?.email || "",
      //     username: "",
      //     firstName: "",
      //     lastName: "",
      //     image: "",
      //     role: "",
      //     accessToken: "",
      //   };
      // },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      console.log(user, "userrrrrrrrr");
      if (user) {
        // token.refreshToken = user.refreshToken;
        // token.accessToken = user.accessToken;
        // token.email = user.email;
        // token.image = user.image;
        // token.username = user.username;
        // token = user;
      }
      return token;
    },
    // session:({session , token})=>{
    //     // session.user = token.email
    //     return session;
    // }
  },
  // session: {
  //   strategy: "jwt",
  //   maxAge: 20000,
  // },
};
