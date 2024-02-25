import { useAuth } from "contexts/AuthContext"
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
export default function Landing() {
    let { currUser } = useAuth();
    let navigate = useNavigate();
    return (
        <>
            <h1>Welcome, {currUser?.username }</h1>
            <Button
                onClick={() => navigate("/activities")}
            >Add Activity</Button>
        </>
    )
}


