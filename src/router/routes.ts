import { PageName } from "./types";
import SignUpPage from "../pages/SignUpPage.vue";
import SignInPage from "../pages/SignInPage.vue";

export const routes = [
  {
    path: "/",
    redirect: { name: PageName.SighUp },
  },
  {
    path: "/sign-up",
    name: PageName.SighUp,
    component: SignUpPage,
  },
  {
    path: "/sign-in",
    name: PageName.SighIn,
    component: SignInPage,
  },
];
