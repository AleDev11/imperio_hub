import { useCallback, useState } from "react";
import axios from "axios";
import Input from "@/components/input";
import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Auth = () => {
    const [values, setValues] = useState({
        email: "",
        name: "",
        password: "",
        variant: "login",
    });

    const toggleVariant = useCallback(() => {
        setValues((prev) => ({
            ...prev,
            variant: prev.variant === "login" ? "register" : "login",
        }));
    }, []);

    const login = useCallback(async () => {
        try {
            if (!values.email || !values.password) return;
            await signIn("credentials", {
                email: values.email,
                password: values.password,
                callbackUrl: "/profiles",
            });
        } catch (error) {
            console.log(error);
        }
    }, [values.email, values.password]);

    const register = useCallback(async () => {
        try {
            if (!values.email || !values.password || !values.name) return;
            await axios.post("/api/register", {
                email: values.email,
                name: values.name,
                password: values.password,
            });
            login();
        } catch (error) {
            console.log(error);
        }
    }, [values.email, values.name, values.password, login]);

    return (
        <div className="relative h-full w-full bg-[url('/images/bg.png')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-5">
                <nav className="px-12 py-5">
                    <img src="/images/Imperio.png" alt="logo" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold cursor-default">
                            {values.variant === "login" ? "Sing in" : "Sing up"}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {values.variant === "register" && (
                                <Input
                                    id="username"
                                    label="Username"
                                    type="text"
                                    value={values.name}
                                    onChange={(ev: any) => setValues({ ...values, name: ev.target.value })}
                                />
                            )}
                            <Input
                                id="email"
                                label="Email"
                                type="email"
                                value={values.email}
                                onChange={(ev: any) => setValues({ ...values, email: ev.target.value })}
                            />
                            <Input
                                id="password"
                                label="Password"
                                type="password"
                                value={values.password}
                                onChange={(ev: any) => setValues({ ...values, password: ev.target.value })}
                            />
                        </div>
                        <button onClick={values.variant == 'login' ? login : register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                            {values.variant === "login" ? "Sing in" : "Sing up"}
                        </button>
                        <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                        <div onClick={() => signIn('google', { callbackUrl: '/profiles' })}
                                className="
                                w-10
                                h-10 
                                bg-white 
                                rounded-full 
                                justify-center 
                                flex items-center 
                                cursor-pointer 
                                hover:opacity-80 
                                transition">
                                <FcGoogle size={30} />
                            </div>
                            <div onClick={() => signIn('github', { callbackUrl: '/profiles' })}
                                className="
                                w-10
                                h-10 
                                bg-white 
                                rounded-full 
                                justify-center 
                                flex items-center 
                                cursor-pointer 
                                hover:opacity-80 
                                transition">
                                <FaGithub size={30} />
                            </div>
                        </div>
                        <p className="text-neutral-500 mt-12 cursor-default">
                            {values.variant === "login" ? "Don't have an account?" : "Already have an account?"}
                            <span onClick={toggleVariant} className="text-red-600 ml-1 hover:underline cursor-pointer">
                                {values.variant === "login" ? "Create account" : "Sing in"}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;