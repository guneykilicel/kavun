import Home from "../pages/home";
import Login from "../pages/auth/login";
import MainLayout from "../pages/layout";
import AuthLayout from "../pages/auth";
import Register from "../pages/auth/register";
import PrivateRoute from "../components/PrivateRoute";
import Logout from "../pages/logout";
import ProfileLayout from "../pages/profile";
import ProfilePosts from '../pages/profile/components/posts'
import ProfileTagged from '../pages/profile/components/tagged'
const routes = [
  {
    path: "/kavun",
    element: <MainLayout />,
    auth: true,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
				path: ':username',
				element: <ProfileLayout />,
				children: [
					{
						index: true,
						element: <ProfilePosts />
					},
					{
						path: 'tagged',
						element: <ProfileTagged />
					}
				]
			},
      {
				path: 'logout',
				element: <Logout />
			},
    ],
  },
  {
    path: '/kavun/auth',
    element: <AuthLayout />,
    children: [
        {
            path: 'login',
            element: <Login />
        },
        {
            path: 'register',
            element: <Register /> 
        }
    ]
}
];

const authCheck = routes => routes.map((route) => {
  if(route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>
  }
  if(route?.children) {
      route.children = authCheck(route.children)
  }
  return route
})

export default authCheck(routes)
