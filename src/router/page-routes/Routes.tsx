/**@format */

// @dependencies
import { lazy } from "react";
import Loadable from "@/components/loaders/Loadable";
;
const Home = Loadable(lazy(() => import('@/pages/Home')));
const Component = Loadable(lazy(() => import('@/pages/components/Buttons')));
const ZustandPage = Loadable(lazy(() => import('@/pages/Zustand')));

const Routes = [
  { path: "/", element: <Home/> },
  { path: "/components", element: <Component/> },
  { path: "/zustand", element: <ZustandPage/> }
]

export default Routes;