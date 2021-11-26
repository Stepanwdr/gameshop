import {
    GAME_ROUTE,
    HOME_ROUTE, ORDER_ROUTE
} from "../../utils/RoutesConsts";
import HomePage from "../../pages/home-page/home-page";
import GamePage from "../../pages/game-page/game-page";
import OrderPage from "../../pages/order-page/order-page";

export const authRoutes=[
    {
        path:ORDER_ROUTE,
        component:OrderPage
    },
]
export const publicRoutes=[
    {
        path:HOME_ROUTE,
        component:HomePage
    },
    {
        path:GAME_ROUTE + ":title/",
        component:GamePage
    }
]
