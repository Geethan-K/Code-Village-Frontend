import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { loginUrl } from "../environment";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errMsg,setErrorMsg] = useState('');
  const [token,setToken] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const response = await axios.post(loginUrl, { email, password });
       // Handle the response as needed
      if(response){
        console.log(response);
        if (response.status == "200") {
          setToken(response.Token)
          navigate("/dashboard");
        }else{
          setError(true);
          setErrorMsg(response.data);
          console.log('err response :' + JSON.stringify(response))
        }
      }
     
    } catch (error) {
      setError(true);
      console.log(error.response.data); // Handle the error response
    }
  };

  return (
    <div className="container bg-black">
      <div >
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-200 md:text-5xl lg:text-6xl dark:text-white">
          Get back to growth with{" "}
          <span className="text-purple-600 dark:text-purple-500">
            the world's #1
          </span>{" "}
          Testing platform.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Here at Code Village we focus on markets where technology, life time
          free, and easy-to-use can unlock long-term value and test a
          candidate's true potential.
        </p>
      </div>
      <form
        className="justify-center min-h-screen overflow-hidden"
        onSubmit={handleSubmit}
      >
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Oops!</strong>
            <span className="block sm:inline">
              Oops !
            </span>
          </div>
        )}
        <div className="w-full mt-4 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 ">
            Existing User ?
          </h1>
          <div className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <Link to="#" className="text-xs text-purple-600 hover:underline">
              Forget Password?
            </Link>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
            </div>
          </div>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <Link
              to="/registration"
              className="font-medium text-purple-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
