import {createBrowserRouter} from "react-router-dom"
import { AdminDashLayOut, HomeLayout } from "../components/LayOut"
import { HomeScreen, MainPage } from "../pages"

export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomeScreen />
            }
        ]
    },
    {
        path: "/dashboadhome",
        element: <AdminDashLayOut />,
        children: [
            {
                index: true,
                element: <MainPage />
            }
        ]
    },

])