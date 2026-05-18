"use client";

import { createBrowserClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

function clearAuthStorage() {
  if (typeof window === "undefined") {
    return;
  }

  Object.keys(window.localStorage).forEach((key) => {
    if (key.startsWith("supabase.auth.") || key.includes("supabase-auth")) {
      window.localStorage.removeItem(key);
    }
  });
}

export function LogoutButton() {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const supabase = useMemo(() => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      return null;
    }

    return createBrowserClient(supabaseUrl, supabaseAnonKey);
  }, []);

  async function handleLogout() {
    setIsLoggingOut(true);

    try {
      if (supabase) {
        const { error } = await supabase.auth.signOut();

        if (error) {
          console.error("Supabase logout failed:", error);
        }
      }
    } catch (error) {
      console.error("Supabase logout failed:", error);
    } finally {
      clearAuthStorage();
      router.replace("/admin/login");
      router.refresh();
    }
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={isLoggingOut}
      className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
    >
      {isLoggingOut ? "Logging out..." : "Logout"}
    </button>
  );
}
