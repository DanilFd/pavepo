import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { UsersPage } from "./pages/users/users/UsersPage"
import { UserDetailPage } from "./pages/userDetail/UserDetailPage"
import "./index.scss"

export const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <UsersPage />
    },
    {
      path: '/:userId',
      element: <UserDetailPage />
    }
  ])

  return (
    <div className="page-container">
      <RouterProvider router={router} />
    </div>
  )
}

