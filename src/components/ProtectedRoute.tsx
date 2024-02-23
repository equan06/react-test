import { Outlet, Navigate } from "react-router-dom";

import { useAuth, AuthProvider } from "contexts/AuthContext";

export function ProtectedRoute() {
    const { currUser } = useAuth();
    if (currUser == null)
        return <Navigate to="/login"/>

    return (
        <Outlet/>
    )
}