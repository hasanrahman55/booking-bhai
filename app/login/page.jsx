"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useActionState } from "react";
import createSession from "../actions/createSession";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import { ClipLoader } from "react-spinners";

function page() {
  const [state, formAction, isLoading] = useActionState(createSession, {});
  const router = useRouter();
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  useEffect(() => {
    if (state.error) toast.error(state?.error);
    if (state.success) {
      toast.success("Login successful");
      setIsAuthenticated(true);
      router.push("/");
    }
  }, [state]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <form action={formAction} className="space-y-6">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Welcome Back
          </h2>
          <p className="text-center text-gray-600">
            Please login to your account
          </p>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 rounded-lg font-medium transition duration-200 flex items-center justify-center ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
            disabled={isLoading}
          >
            {isLoading ? <ClipLoader size={20} color="#ffffff" /> : "Login"}
          </button>

          {/* Register Link */}
          <p className="text-center text-gray-600">
            Don’t have an account?{" "}
            <Link
              href="register"
              className="text-blue-500 font-medium hover:underline"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default page;
