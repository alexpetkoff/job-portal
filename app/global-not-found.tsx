import "./globals.css";
import type { Metadata } from "next";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import RootLayout from "./layout";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

const LayerStackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <g id="SVGRepo_iconCarrier">
        <polygon
          style={{
            fill: "none",
            stroke: "currentColor",
            strokeMiterlimit: 10,
            strokeWidth: "1.21px",
          }}
          points="20.59 6.27 20.59 7.23 14.86 7.23 14.86 1.5 15.82 1.5 20.59 6.27"
        />
        <polygon
          style={{
            fill: "none",
            stroke: "currentColor",
            strokeMiterlimit: 10,
            strokeWidth: "1.21px",
          }}
          points="20.59 12 17.73 13.91 14.86 12 11.99 13.91 9.14 12 6.27 13.91 3.41 12 3.41 1.5 15.82 1.5 20.59 6.27 20.59 12"
        />

        <polygon
          style={{
            fill: "none",
            stroke: "currentColor",
            strokeMiterlimit: 10,
            strokeWidth: "1.21px",
          }}
          points="20.59 15.82 17.73 17.73 14.86 15.82 11.99 17.73 9.14 15.82 6.27 17.73 3.41 15.82 3.41 22.5 20.59 22.5 20.59 15.82"
        />
      </g>
    </svg>
  );
};

export default function GlobalNotFound() {
  return (
    <RootLayout>
      <Card className="max-w-xl mx-auto text-center mt-[calc(50vh/2)]">
        <LayerStackIcon className="mx-auto w-12" />
        <CardTitle className="text-xl">404 - Not Found!</CardTitle>
        <CardDescription>
          The page you are looking for does not exist!
        </CardDescription>
        <Link
          href="/"
          className="relative w-fit mx-auto flex items-center group hover:text-green-600"
        >
          <Button className="cursor-pointer">Go Back Home</Button>
        </Link>
      </Card>
    </RootLayout>
  );
}
