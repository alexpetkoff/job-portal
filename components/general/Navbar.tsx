import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { auth, signOut } from "@/app/utils/auth";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="flex items-center justify-between py-5">
      <Link href="/" className="flex items-center gap-2">
        <BriefcaseBusiness className="px-2 py-2 w-10 h-10 bg-radial-[at_50%_75%] from-primary via-green-400 to-green-300 to-90% rounded-xl text-white" />
        <h1 className="text-2xl font-bold antialiased">
          Job<span className="text-primary">Portal</span>
        </h1>
      </Link>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        {session?.user ? (
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <Button className="cursor-pointer text-white bg-red-400 hover:bg-red-500">
              Logout
            </Button>
          </form>
        ) : (
          <Link href="/login">
            <Button className="cursor-pointer text-white">Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
