import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import LandingPage from "./pages/LandingPage";
import ContactUs from "./pages/ContactUs";
import ContactList from "./pages/ContactList";
import ThankYou from "./pages/ThankYou";

const apiBaseURL = "http://localhost:8080";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/contact-us",
        element: <ContactUs props={apiBaseURL} />,
    },
    {
        path: "/contact-list",
        element: <ContactList props={apiBaseURL} />,
    },
    {
        path: "/thank-you",
        element: <ThankYou />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Helmet>
            <script
                src="https://kit.fontawesome.com/598ca8034e.js"
                crossorigin="anonymous"></script>
        </Helmet>
        <RouterProvider router={router} />
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
