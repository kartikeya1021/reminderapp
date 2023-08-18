import axios from "axios";
import { useState } from "preact/hooks";
import React from "react";
import Register from "./register";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("login");
  const loginUser = async (e) => {
    try {
      const { data } = await axios.post("http://localhost:3000/user/login", {
        email,
        password,
      });
      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
        window.location.href = "/";
      }
    } catch (error) {
      window.alert(error.response.data);
    }
  };

  return type == "login" ? (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
          <h1 className="text-2xl font-bold mb-5 text-center">Login</h1>
          <div>
            <div>
              <label className="block mb-2 text-sm font-bold">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full p-2 mb-6 text-sm border-b-2 border-gray-400 outline-none focus:bg-gray-300"
                placeholder="Enter a Email"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-bold">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="w-full p-2 mb-6 text-sm border-b-2 border-gray-400 outline-none focus:bg-gray-300"
                placeholder="Enter a Password"
              />
            </div>
            <div>
              <button
                onClick={loginUser}
                className="w-full bg-blue-400 text-white font-bold py-2 px-4 mb-6 rounded hover:bg-blue-500"
              >
                Login
              </button>
            </div>
            <hr className="mb-6 border-t" />
            <div onClick={() => setType("register")} className="text-center">
              <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                Create an Account!
              </a>
            </div>
            <div className="text-center">
              <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Register />
  );
}
