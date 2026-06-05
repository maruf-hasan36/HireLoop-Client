"use client";
import React, { useState } from "react";
import { Card, Button } from "@heroui/react";
import {
  CircleCheck,
  CircleExclamation,
  Eye,
  EyeSlash,
  ArrowLeft,
} from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignInPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const { data, error: authError } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
        callbackURL: "/", // Where to send users after they log in
      });

      if (authError) {
        // Better Auth gives clear error messages (e.g., "Invalid email or password")
        setError(authError.message || "Invalid email or password.");
        setIsLoading(false);
      } else {
        setSuccess("Welcome back! Redirecting...");
        setTimeout(() => {
          router.push("/");
        }, 1500);
      }
    } catch (err) {
      setError("Failed to connect to the authentication server.");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-4">
      {/* Go Back Link back to signup page if they hit it by mistake */}
      <div className="w-full max-w-md mb-4">
        <Link
          href="/signUp"
          className="inline-flex items-center gap-2 text-small text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Sign Up
        </Link>
      </div>

      <Card className="w-full max-w-md p-2 shadow-xl border border-zinc-200/50 dark:border-zinc-800/50">
        <Card.Header className="flex flex-col gap-1 items-center pb-2 pt-6">
          <Card.Title className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Welcome Back
          </Card.Title>
          <Card.Description className="text-small text-zinc-500 dark:text-zinc-400">
            Enter your credentials to access your account
          </Card.Description>
        </Card.Header>

        <Card.Content className="py-6">
          <form onSubmit={handleSignIn} className="flex flex-col gap-4">
            {/* Email Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-small font-medium text-zinc-700 dark:text-zinc-300">
                Email Address <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-lg text-small outline-none focus:border-primary transition-colors duration-200"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-small font-medium text-zinc-700 dark:text-zinc-300">
                  Password <span className="text-danger">*</span>
                </label>
                {/* Optional: Add a forgot password link later if needed */}
                <Link
                  href="/forgot-password"
                  className="text-xs text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative flex items-center">
                <input
                  type={isVisible ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-3 pr-10 py-2 bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-lg text-small outline-none focus:border-primary transition-colors duration-200"
                />
                <button
                  className="absolute right-2 focus:outline-none flex items-center justify-center p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlash className="text-lg text-zinc-400 pointer-events-none" />
                  ) : (
                    <Eye className="text-lg text-zinc-400 pointer-events-none" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message Alert */}
            {error && (
              <div className="flex items-start gap-2 p-3 rounded-xl bg-danger-50 dark:bg-danger-950/30 text-danger text-small border border-danger-200/50 dark:border-danger-900/50">
                <CircleExclamation className="mt-0.5 flex-shrink-0" size={16} />
                <span>{error}</span>
              </div>
            )}

            {/* Success Message Alert */}
            {success && (
              <div className="flex items-start gap-2 p-3 rounded-xl bg-success-50 dark:bg-success-950/30 text-success text-small border border-success-200/50 dark:border-success-900/50">
                <CircleCheck className="mt-0.5 flex-shrink-0" size={16} />
                <span>{success}</span>
              </div>
            )}

            <Button
              type="submit"
              color="primary"
              className="font-semibold shadow-md mt-2 w-full"
              isLoading={isLoading}
              disabled={isLoading || !!success}
            >
              Sign In
            </Button>
          </form>

          {/* Alternative navigation switch */}
          <div className="mt-6 text-center border-t border-zinc-100 dark:border-zinc-900 pt-4">
            <p className="text-small text-zinc-500 dark:text-zinc-400">
              Don&apos;t have an account yet?{" "}
              <Link
                href="/auth/signUp"
                className="text-primary font-medium hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}
