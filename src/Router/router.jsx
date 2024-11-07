import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import TutorProfile from "../pages/TutorAllPage/TutorProfile/TutorProfile";
import TuitionJobs from "../pages/TuitionJobsAllPage/TuitionJobs/TuitionJobs";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import About from "../pages/About/About";
import RegistrationView from "../pages/RegistrationView/RegistrationView";
import TuitionDetails from "../pages/TuitionJobsAllPage/TuitionDetails/TuitionDetails";
import TutorProfileDetails from "../pages/TutorAllPage/TutorProfileDetails/TutorProfileDetails";
import TutorHireRequest from "../pages/TutorAllPage/TutorHireRequest/TutorHireRequest";
import TermsOfUser from "../pages/TermsOfUser/TermsOfUser";
import Dashboard from "../Layouts/Dashboard";
import ParentHome from "../pages/Deashboard/Parent/ParentHome/ParentHome";
import TutorHome from "../pages/Deashboard/Tutor/TutorHome/TutorHome";
import AdminHome from "../pages/Deashboard/Admin/AdminHome/AdminHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/tuition-jobs",
                element: <TuitionJobs />,
            },
            {
                path: "/tuition-job-details/:id",
                element: <TuitionDetails />,
            },
            {
                path: "/tutor-profile",
                element: <TutorProfile />,
            },
            {
                path: "/tutor-details/:id",
                element: <TutorProfileDetails />,
            },
            {
                path: "/tutor-hire-request/:id",
                element: <TutorHireRequest />,
            },
            {
                path: "/contact-us",
                element: <ContactUs />,
            },
            {
                path: "/about-us",
                element: <About />,
            },
            {
                path: "/registrationview",
                element: <RegistrationView />
            },
            {
                path: "/terms-condition",
                element: <TermsOfUser />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/registration/parent",
        element: <Registration />
    },
    {
        path: "/registration/tutor",
        element: <Registration />
    },
    {
        path: "/registration/coaching",
        element: <Registration />
    },




    ///// DASHBOARD /////
    {
        path: "/dashboard",
        element: (
            <Dashboard />
        ),
        children: [
            // Admin Dashboard Routes
            {
                path: "/dashboard/admin-home",
                element: (
                    // <ParentHome />
                    <AdminHome />
                ),
            },
            {
                path: "/dashboard/tutor-home",
                element: (
                    // <ParentHome />
                    <TutorHome />
                ),
            },
            {
                path: "/dashboard/parent-home",
                element: (
                    <ParentHome />
                ),
            },
        ]
    }

]);
export default router;