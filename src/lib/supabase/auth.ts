import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServerClient } from "@supabase/auth-helpers-nextjs";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

function isInvalidRefreshTokenError(error: unknown) {
  if (!error || typeof error !== "object") {
    return false;
  }

  const message =
    "message" in error && typeof (error as any).message === "string"
      ? (error as any).message
      : "";

  return /invalid refresh token|refresh token not found|session.*expired|jwt/i.test(
    message,
  );
}

async function createServerSupabaseClient() {
  const cookieStore = await cookies();

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
    },
  });
}

export async function requireAdminUser() {
  const authSupabase = await createServerSupabaseClient();
  const result = await authSupabase.auth.getUser();

  if (result.error && isInvalidRefreshTokenError(result.error)) {
    await authSupabase.auth.signOut();
    redirect("/admin/login");
  }

  if (!result.data?.user) {
    redirect("/admin/login");
  }

  return { authSupabase, user: result.data.user };
}
