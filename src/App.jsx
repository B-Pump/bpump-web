import { Outlet, RouterProvider, createHashRouter, useRouteError } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { Accueil } from "./pages";

import "./css/App.css";

const hashrouter = createHashRouter([
    {
        path: "",
        element: <Root />,
        errorElement: <PageError />,
        children: [
            {
                path: "",
                element: <Accueil />,
            },
        ],
    },
]);

function PageError() {
    console.error(useRouteError());
    return (
        <main>
            <h1>&#x26A0; Une erreur est survenue &#x26A0;</h1>
        </main>
    );
}

function Root() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default function App() {
    return <RouterProvider router={hashrouter} />;
}
