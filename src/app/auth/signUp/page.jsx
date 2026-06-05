"use client";
import React, { useState, useMemo } from "react";
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

export default function SignupPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    name: "",
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

  // Real-time password validation logic
  const passwordRequirements = useMemo(() => {
    const p = formData.password;
    return [
      { label: "At least 8 characters", met: p.length >= 8 },
      { label: "At least one uppercase letter", met: /[A-Z]/.test(p) },
      { label: "At least one number", met: /[0-9]/.test(p) },
      {
        label: "At least one special character (@$!%*?&)",
        met: /[@$!%*?&]/.test(p),
      },
    ];
  }, [formData.password]);

  // Check if all rules pass
  const isPasswordValid = useMemo(() => {
    return passwordRequirements.every((req) => req.met);
  }, [passwordRequirements]);

  const handleSignup = async (e) => {
    e.preventDefault();

    // Fallback block verification
    if (!isPasswordValid) {
      setError("Please ensure your password meets all security requirements.");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const { data, error: authError } = await authClient.signUp.email({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        callbackURL: "/",
      });

      if (authError) {
        setError(authError.message || "An error occurred during signup.");
        setIsLoading(false);
      } else {
        setSuccess("Account created successfully! Redirecting...");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (err) {
      setError("Failed to connect to the authentication server.");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-4">
      {/* Go Back Link */}
      <div className="w-full max-w-md mb-4">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-small text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Sign In
        </Link>
      </div>

      <Card className="w-full max-w-md p-2 shadow-xl border border-zinc-200/50 dark:border-zinc-800/50">
        <Card.Header className="flex flex-col gap-1 items-center pb-2 pt-6">
          <Card.Title className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Create an account
          </Card.Title>
          <Card.Description className="text-small text-zinc-500 dark:text-zinc-400">
            Enter your details below to sign up
          </Card.Description>
        </Card.Header>

        <Card.Content className="py-6">
          <form onSubmit={handleSignup} className="flex flex-col gap-4">
            {/* Name Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-small font-medium text-zinc-700 dark:text-zinc-300">
                Full Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-lg text-small outline-none focus:border-primary transition-colors duration-200"
              />
            </div>

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
              <label className="text-small font-medium text-zinc-700 dark:text-zinc-300">
                Password <span className="text-danger">*</span>
              </label>
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

            {/* Password Validation UI Indicators */}
            {formData.password.length > 0 && (
              <div className="p-3 bg-zinc-100/50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200/40 dark:border-zinc-800/40 flex flex-col gap-1.5">
                <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-0.5">
                  Password Requirements:
                </p>
                {passwordRequirements.map((req, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs">
                    {req.met ? (
                      <CircleCheck className="text-success" size={14} />
                    ) : (
                      <CircleExclamation
                        className="text-zinc-400 dark:text-zinc-600"
                        size={14}
                      />
                    )}
                    <span
                      className={
                        req.met
                          ? "text-success/90 line-through decoration-success/30"
                          : "text-zinc-500 dark:text-zinc-400"
                      }
                    >
                      {req.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

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
              disabled={isLoading || !!success || !isPasswordValid}
            >
              Sign Up
            </Button>
          </form>

          {/* Alternative navigation switch */}
          <div className="mt-6 text-center border-t border-zinc-100 dark:border-zinc-900 pt-4">
            <p className="text-small text-zinc-500 dark:text-zinc-400">
              Already have an account?{" "}
              <Link
                href="/auth/signIn"
                className="text-primary font-medium hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}
