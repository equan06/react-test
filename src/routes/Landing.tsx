import { useAuth } from "contexts/AuthContext"

export default function Landing() {
    let { currUser } = useAuth();

    return (
        <>
            <h1>Welcome, {currUser?.username }</h1>
        </>
    )
}


