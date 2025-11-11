import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// @ts-expect-error - next-auth v5 beta type issue
export const { auth: middleware } = NextAuth(authConfig);