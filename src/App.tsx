import './App.css'
import Root from "routes/Root"
import Login from "routes/Login"
import Landing from "routes/Landing"

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from 'contexts/AuthContext'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Landing></Landing>
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
