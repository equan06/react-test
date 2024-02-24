import { createContext, useContext, useState, PropsWithChildren, useEffect } from "react"

const USER_CACHE = "userStorage";
const cachedUser = localStorage.getItem(USER_CACHE);

export type User = {
    id: number,
    username: string,
    email: string,
}

export type AuthContextType = {
    currUser: User | null,
    getUserByID: (id: number) => Promise<User>,
    login: (username: string, password:string) => Promise<boolean>
    logout: () => Promise<void>
    signUp: (username: string, password:string, email: string) => Promise<void>
}


export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const currAuthContext = useContext(AuthContext);
    if (!currAuthContext)
        throw new Error("useAuth must be nested in AuthProvider");
    return currAuthContext;
}

export const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
    const [currUser, setCurrUser] = useState<User | null>(() => {
        if (cachedUser != null)
            return JSON.parse(cachedUser);
        return null;
    });
    
    async function getUserByID(id: number) {
        await delay(500); // mock getting user from db
        const thisUser: User = {
            id: id,
            username: "user42",
            email: "fakemail@address.com"
        };
        return thisUser;
    }

    async function signUp(username: string, password: string, email: string) {
        await delay(500); 
        console.log(username, email, password);
    }

    async function login(username: string, password: string) {
        let success = false;
        try {
            await delay(500); // mock db validation
            success = true;
            console.log("logged in");
            console.log(username, password);
            const userID = 42;
    
            const thisUser = await getUserByID(userID);
            setCurrUser(thisUser);

            localStorage.setItem(USER_CACHE, JSON.stringify(thisUser));
        }
        catch (error) {
            console.error(error);
            setCurrUser(null);
        }
        return success;
    }

    async function logout() {
        await delay(200);
        console.log("logged out")
        setCurrUser(null);
        localStorage.removeItem(USER_CACHE);
    }

    return (
        <AuthContext.Provider value={{currUser, getUserByID, login, logout, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}


async function delay(ms: number) {
    return await new Promise(x => setTimeout(x, ms));
}