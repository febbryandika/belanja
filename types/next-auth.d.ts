declare module 'next-auth' {
  import {DefaultSession} from "next-auth";

  export interface Session {
    user: {
      role: string;
    } & DefaultSession["user"];
  }
}