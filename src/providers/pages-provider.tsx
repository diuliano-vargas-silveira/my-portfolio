import createGlobalState from "react-create-global-state";

import { ROUTES } from "@/constants/routes";

const [usePages, PagesProvider] = createGlobalState([ROUTES.WELCOME]);

export { usePages, PagesProvider };
