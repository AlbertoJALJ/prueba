const env = process.env.NODE_ENV;
export const auth_service =
  env === "development"
    ? "http:localhost:3002/auth/checkuser"
    : "https://catalogoeas.com/auth/checkuser";
