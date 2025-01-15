import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      accessToken?: string;
      name?: string;
      email?: string;
    };
  }
}
