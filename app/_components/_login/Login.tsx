"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

// Zod Validation Schema
const loginSchema = z.object({
  phone_number: z
    .string()
    .regex(/^\d{11}$/, "Phone number must be 11 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
          Welcome Back
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Phone Number */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">Phone Number</label>
            <input
              type="text"
              {...register("phone_number")}
              placeholder="01XXXXXXXXX"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
            />
            {errors.phone_number && (
              <p className="text-red-600 text-sm mt-1">{errors.phone_number.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">Password</label>
            <input
              type="password"
              {...register("password")}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-800 text-white py-3 rounded-lg font-semibold hover:bg-green-900 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-green-800 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
