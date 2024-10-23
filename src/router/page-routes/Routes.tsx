/**@format */

// @dependencies
import { lazy } from "react";
import Loader from "@/components/loader/Loader";

const HomePage = Loader(lazy(() => import('@/pages/Home')));
const TestPage = Loader(lazy(() => import('@/pages/Test')));

const Routes = [
  { path: "/", element: <HomePage/> },
  { path: "/testpage", element: <TestPage/> }
]

export default Routes