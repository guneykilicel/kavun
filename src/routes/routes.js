import Home from "../components/home"
import Login from "../components/login"



const routes = [
    {
        path: '/kavun/',
        element: <Home />,
        auth: true
    },
    {
        path: '/kavun/login',
        element: <Login />
    }
]

// const authCheck = routes => routes.map((route) => {
//     if(route?.auth) {
//         route.element = <PrivateRoute>{route.element}</PrivateRoute>
//     }
//     if(route?.children) {
//         route.children = authCheck(route.children)
//     }
//     return route
// })

export default routes