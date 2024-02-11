"use client";

import { validateEmail } from "@/lib/emailValidator";
import { cn } from "@/lib/utils";
import { supabase } from "@/libs/supabase";
import { useState } from "react";
import Spinner from "./spinner";

const NewsletterSignUp = () => {
  const [email, setEmail] = useState("");
  const [validationError, setValidationError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubscribe = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!email) {
      setValidationError("Prosze podać email!");
      return;
    }

    if (!validateEmail(email)) {
      setValidationError("Prosze podać poprawny email!");
      return;
    }

    setValidationError("");

    setLoading(true);
    const response = await fetch("/api/newsletter", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });

    if (!response.ok || response.status !== 200) {
      setValidationError("Coś poszło nie tak, być może jesteś już na liscie!");
      setLoading(false);
      return;
    }

    setLoading(false);
    setSuccess("Dołaczyłeś do klubu! Dziękujemy.");
  };

  return (
    <form className="flex relative">
      <input
        value={email}
        disabled={!!success || loading}
        onChange={(e) => setEmail(e.target.value)}
        className={cn(
          "p-2 text-black font-medium",
          !!success && "border border-green-400 text-green-200"
        )}
        placeholder="Email address..."
      />
      <button
        disabled={!!success || loading}
        onClick={handleSubscribe}
        className={cn(
          "px-4 py-3 border-solid border-2 border-white font-[900] inline-block",
          !!success && !loading && "hidden"
        )}
      >
        Subscribe
      </button>

      {loading && <Spinner />}

      <div className="mt-4 text-red-400 absolute bottom-[-40px] left-0">
        {validationError}
      </div>
      <div className="mt-4 text-green-400 absolute bottom-[-40px] left-0">
        {success}
      </div>
    </form>
  );
};

export default NewsletterSignUp;
