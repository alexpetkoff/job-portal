"use client";

import { useState } from "react";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseBusiness } from "lucide-react";
import { UserTypeSelection } from "./UserTypeForm";
import { CompanyForm } from "./CompanyForm";

type UserSelectionType = "company" | "jobSeeker" | null;

export function OnboardingForm() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserSelectionType>(null);

  function handleUserTypeSelection(type: UserSelectionType) {
    setUserType(type);
    setStep(2);
  }

  function renderStep() {
    switch (step) {
      case 1:
        return <UserTypeSelection onSelect={handleUserTypeSelection} />;
      case 2:
        return userType === "company" ? (
          <CompanyForm />
        ) : (
          <p>User is a jobSeeker</p>
        );
      default:
        return null;
    }
  }

  return (
    <>
      <div className="flex items-center gap-2 mb-10">
        <Link href="/" className="flex items-center gap-4">
          <BriefcaseBusiness className="px-2 py-2 w-10 h-10 bg-radial-[at_50%_75%] from-primary via-green-400 to-green-300 to-90% rounded-xl text-white" />
          <h1 className="text-4xl font-bold antialiased">
            Job<span className="text-primary">Portal</span>
          </h1>
        </Link>
      </div>
      <Card className="max-w-lg w-full">
        <CardContent>{renderStep()}</CardContent>
      </Card>
    </>
  );
}
