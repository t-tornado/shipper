export {};

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: "development" | "production";
    }
  }
}
