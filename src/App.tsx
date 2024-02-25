import './App.css'
import MainLayout from "components/MainLayout";

import Landing from "routes/Landing"
import Login from "routes/Login"
import Test from 'routes/Test';
import About from 'routes/About';

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from 'contexts/AuthContext'
import { ProtectedRoute } from 'components/ProtectedRoute';
import CreateActivity from 'routes/CreateActivity';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                element: <ProtectedRoute/>,
                children: [
                    {
                        path: "landing",
                        element: <Landing/>
                    },
                    { 
                        path: "about",
                        element: <About/>
                    },
                    {
                        path: "activities",
                        element: <CreateActivity/>
                    }
                ]
            },
        ]
    },
    {
        path: "login",
        element: <Login/>
    }
])

function App() {
  return (
    <ChakraProvider>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </ChakraProvider>
  )
}

export default App
