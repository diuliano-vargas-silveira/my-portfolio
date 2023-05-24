export const ROUTES: { [key: string]: any } = {
  WELCOME: { href: "/", name: "welcome" },
  ME: { href: "/me", name: "me" },
};

export interface RoutesInterface {
  href: string;
  name: string;
}

export enum RoutesEnum {
  WELCOME = "WELCOME",
  ME = "ME",
}
