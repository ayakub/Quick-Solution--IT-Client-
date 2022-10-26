import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import CourseDetails from "../../Pages/CourseItem/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Blog from "../../Pages/Shared/Blog/Blog";
import FAQ from "../../Pages/Shared/FAQ/FAQ";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home> },
            {
                path: '/course',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/course')
            },
            { path: '/faq', element: <FAQ></FAQ> },
            { path: '/blog', element: <Blog></Blog> },
            { path: 'register', element: <Register></Register> },
            { path: 'login', element: <Login></Login> },
            {
                path: '/course/:id', element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            }
        ]
    }
])