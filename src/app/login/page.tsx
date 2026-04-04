"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import API from "../../services/api";
import { useFormStatus } from "react-dom";

export default function Login() {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError]=useState<Record<string, string>>({});
    const {pending}=useFormStatus()
    const ErrorValidation=()=>{
        const newObj: Record<string, string> = {};
        if(!email)
            newObj.email="Email required. Please enter.";
        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
            newObj.email="Invalid email format.";
        // No else case needed if valid

        if(!password)
            newObj.password="Password required.";
        else if(password.length<6)
            newObj.password="Password should be at least 6 characters.";
        // No else case needed if valid
        return newObj;
    }

    const handleSubmit = async (e: any) => {

        e.preventDefault();
        const validate=ErrorValidation();

        try {
            if(Object.keys(validate).length === 0){
            const res = await API.post("/auth/login", {
                email,
                password,
            });

            router.push("/cart");
        }
        else{
            setError(validate);
        }

        } catch (err: any) {
            alert(err.response?.data?.message);
        }
    };

    return (
        <div className="flex justify-center items-center m-auto">

            <div className="p-6 shadow rounded w-96">

                <h2 className="text-xl mb-4">Login</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        placeholder="Email"
                        className="border p-2 w-full mb-2"
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setError({});
                        }}
                    />
                    {error && <span className="text-red-500 text-sm">{error.email}</span>}

                    <input
                        type="password"
                        placeholder="Password"
                        className="border p-2 w-full mb-2"
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setError({});
                        }}
                    />
                    {error && <span className="text-red-500 text-sm">{error.password}</span>}

                    <button className="bg-green-500 text-white p-2 w-full" disabled={pending}>
                        {pending ?"Logging in ...":"Login"}
                    </button>

                </form>

            </div>

        </div>
    );
}