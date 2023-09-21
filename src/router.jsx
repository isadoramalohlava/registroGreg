import { createBrowserRouter } from "react-router-dom";
import { LoginMenu } from "./pages/LoginMenu";
import { Register } from "./pages/Register";
import { Photo } from "./components/Photo";
import { Password } from "./pages/Password";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginMenu />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/password",
        element: <Password />,
    }
])

export default router