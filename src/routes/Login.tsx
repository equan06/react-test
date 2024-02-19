import {SubmitHandler, useForm} from "react-hook-form"
import { FormErrorMessage, FormLabel, FormControl, Input, Button} from "@chakra-ui/react"

import { useAuth } from "contexts/AuthContext";
import { useNavigate } from "react-router-dom";

type LoginInputs = {
    username: string,
    password: string
}

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const {
        handleSubmit, 
        formState: { errors, isSubmitting },
        register,
    } = useForm<LoginInputs>()

    const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
        console.log("submitting form...", data);

        let loginSuccess = await login(data.username, data.password);
        if (loginSuccess)
            navigate("/");
        else
            console.error("login failed");            
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.username != null || errors.password != null }>
                    <FormLabel htmlFor='username'>Username</FormLabel>
                    <Input
                        id='username'
                        {...register("username", { required: true })}
                    />
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input
                        id='password'
                        {...register("password", { required: true })}
                    />
                </FormControl>
                <FormErrorMessage>
                </FormErrorMessage>
                <Button isLoading={isSubmitting} type='submit'>Submit</Button>
            </form>
        </>
    )
}