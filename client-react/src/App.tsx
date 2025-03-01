import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { AuthLayout } from "./layouts/AuthLayout";
import { GuestLayout } from "./layouts/GuestLayout";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { Notes } from "./pages/Notes";
import { Note } from "./pages/Note";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    ), // Wraps everything in AuthProvider
    children: [
      {
        element: <GuestLayout />,
        children: [
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          {
            path: "notes",
            element: <Notes />,
          },
          { path: "notes/:id", element: <Note /> },
        ],
      },
      { path: "/", element: <Navigate to="/dashboard" replace /> },

      // Redirect
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
