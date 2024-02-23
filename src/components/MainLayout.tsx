import { Outlet, useNavigate } from "react-router-dom"
import { Button } from "@chakra-ui/react"
import { useAuth } from "contexts/AuthContext"
// Put all default layout stuff here, including navigation, user profile, etc.
export default function MainLayout() {
    let navigate = useNavigate();
    const { currUser, logout } = useAuth();

    return (
        <div>
            Main Layout
            <br/>
            {
                currUser == null ? 
                <Button
                    onClick={() => navigate("/login")}
                >Login
                </Button> :
                <Button 
                onClick={async () => {
                    await logout();
                    navigate("/");
                    }
                }>
                    Logout
                </Button>
            }

            <Outlet></Outlet>
        </div>
    )
}