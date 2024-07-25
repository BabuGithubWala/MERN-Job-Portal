import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import Login from "../components/Login";
import JobDetails from "../Pages/JobDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            {
                path: "/post-job",
                element: <CreateJob />
            },
            {
                path: "/job/:id",
                element: <JobDetails />
            },
            {
                path: "/job/:id",
                element: <JobDetails/>
            }
        ],
    },

    {
        path: "/login",
        element: <Login />
    }
]);

export default router;