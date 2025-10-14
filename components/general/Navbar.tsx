import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
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
        <Link href="/login">
          <Button className="cursor-pointer text-white">Login</Button>
        </Link>
      </div>
    </nav>
  );
}
