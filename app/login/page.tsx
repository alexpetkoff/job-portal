import { LoginForm } from "@/components/forms/LoginForm";
import { BriefcaseBusiness } from "lucide-react";
import Link from "next/link";

export default function Login() {
  console.log("test");
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center self-center gap-2">
          <BriefcaseBusiness className="px-2 py-2 w-10 h-10 bg-radial-[at_50%_75%] from-primary via-green-400 to-green-300 to-90% rounded-xl text-white" />
          <h1 className="text-2xl font-bold">
            Job<span className="text-primary">Portal</span>
          </h1>
        </Link>
        <LoginForm />
      </div>
    </div>
  );
}
