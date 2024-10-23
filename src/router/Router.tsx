import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Routes from "@/router/page-routes/Routes";

export const router = createBrowserRouter([
  ...Routes
])

export { router as history }

export default function Router() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<div>Hello World</div>}
    />
  )
}