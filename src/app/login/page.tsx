"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import API from "../../services/api";
import { useFormStatus } from "react-dom";

export default function Login() {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {pending,method,action}=useFormStatus()

    const handleSubmit = async (e: any) => {

        e.preventDefault();

        try {

            const res = await API.post("/auth/login", {
                email,
                password,
            });

            localStorage.setItem("token", res.data.token);

            router.push("/cart");

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
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="border p-2 w-full mb-2"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="bg-green-500 text-white p-2 w-full" disabled={pending}>
                        {pending ?"Logging in ...":"Login"}
                    </button>

                </form>

            </div>

        </div>
    );
}