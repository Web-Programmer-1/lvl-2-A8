"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

// Zod Validation Schema
const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  phone_number: z
    .string()
    .regex(/^\d{11}$/, "Phone number must be 11 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  // React Hook Form + Zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  // Submit handler
  const onSubmit = (data: RegisterFormData) => {
    console.log("Register Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
          Create an Account
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">Full Name</label>
            <input
              type="text"
              {...register("name")}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">Phone Number</label>
            <input
              type="text"
              {...register("phone_number")}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
              placeholder="01XXXXXXXXX"
            />
            {errors.phone_number && (
              <p className="text-red-600 text-sm mt-1">
                {errors.phone_number.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
              placeholder="Enter a strong password"
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-green-800 text-white py-3 rounded-lg font-semibold hover:bg-green-900 transition"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-green-800 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
