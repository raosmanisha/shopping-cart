"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import API from "../../services/api";

export default function Signup() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await API.post("/auth/signup", form);

      alert("Signup successful");
      router.push("/login");

    } catch (err: any) {
      alert(err.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center items-center m-auto">

      <div className="p-6 shadow-lg rounded w-96">

        <h2 className="text-xl mb-4">Signup</h2>

        <form onSubmit={handleSubmit}>

          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />

          <button className="bg-blue-500 text-white p-2 w-full">
            Signup
          </button>

        </form>

        <p className="mt-3">
          Already have an account? <a href="/login">Login</a>
        </p>

      </div>

    </div>
  );
}