import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../../firbase";
import { usecontextallthetime } from "../../Stroe/Storeprovider";

const Log = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const { login } = usecontextallthetime();

  const onChangeUserEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setUserPassword(e.target.value);
  };

  const toggleSignIn = () => {
    setIsSignIn((prev) => !prev);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isSignIn) {
        const response = await signInWithEmailAndPassword(
          auth,
          userEmail,
          userPassword
        );
        login(response.user.uid);
      } else {
        const response = await createUserWithEmailAndPassword(
          auth,
          userEmail,
          userPassword
        );
        login(response.user.uid);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold mb-4 text-center text-gray-900">
          {isSignIn ? "Log In" : "Sign Up"}
        </h2>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={userEmail}
              onChange={onChangeUserEmail}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={userPassword}
              onChange={onChangePassword}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : isSignIn ? "Log In" : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="text-indigo-600 hover:text-indigo-700 underline focus:outline-none transition duration-300"
            onClick={toggleSignIn}
          >
            {isSignIn ? "Sign Up" : "Log In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Log;
