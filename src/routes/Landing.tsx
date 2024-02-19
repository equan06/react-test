import { useNavigate } from "react-router-dom"

export default function Landing()
{
let navigate = useNavigate();

    return (
        <>
            <h1>Welcome</h1>
            <button onClick={() => navigate("/login")}>Login</button>
        </>
    )
}


