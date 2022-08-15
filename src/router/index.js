import Home from "~/page/Home";
import Following from "~/page/Following";
import Upload from "~/page/Upload";
import Search from "~/page/Search";
import { HeaderOnly } from "~/component/Layout/HeaderOnly";
const publishRouter = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/following",
    component: Following,
  },
  {
    path: "/upload",
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: "/search",
    component: Search,
    layout: null,
  },
];
const privateRouter = [{}];
export { publishRouter, privateRouter };
