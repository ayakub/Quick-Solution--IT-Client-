import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Courses from "../../Pages/Courses/Courses";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Blog from "../../Pages/Shared/Blog/Blog";
import FAQ from "../../Pages/Shared/FAQ/FAQ";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Courses></Courses> },
            { path: '/faq', element: <FAQ></FAQ> },
            { path: '/blog', element: <Blog></Blog> },
            { path: 'register', element: <Register></Register> },
            { path: 'login', element: <Login></Login> },
        ]
    }
])