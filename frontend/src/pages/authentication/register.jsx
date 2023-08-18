import axios from "axios";
import { useState } from "preact/hooks";
import React from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const loginUser = async (e) => {
    try {
      const { data } = await axios.post("http://localhost:3000/user/register", {
        email,
        password,
        name,
      });
      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
        window.location.href = "/";
      }
    } catch (error) {
      window.alert(error.response.data);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
          <h1 className="text-2xl font-bold mb-5 text-center">Login</h1>
          <div>
            <div>
              <label className="block mb-2 text-sm font-bold">Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="email"
                className="w-full p-2 mb-6 text-sm border-b-2 border-gray-400 outline-none focus:bg-gray-300"
                placeholder="Enter your name"
              />
            </div>
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
                Register
              </button>
            </div>
            <hr className="mb-6 border-t" />
            <div className="text-center">
              <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                Already have an account?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
