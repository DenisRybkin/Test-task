import {LOGIN_ROUTE,EVENTS_ROUTE} from "./utils/consts";
import {Login} from "./components/Login";
import {Main} from "./components/Main";


export const publicRoutes = [
    {
        path : LOGIN_ROUTE,
        Component : Login
    }
]
export const privateRoutes = [
    {
        path : EVENTS_ROUTE,
        Component : Main
    }
]