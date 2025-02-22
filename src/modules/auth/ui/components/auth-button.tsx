"use client";

import { Button } from "@/components/ui/button";
import { ClapperboardIcon, UserCircle } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export const AuthButton = () => {
  // TODO: Add different auth states
  return (
    <>
      <SignedIn>
        <Button asChild variant="outline">
          <Link href="/studio">
            <ClapperboardIcon />
            Studio
          </Link>
        </Button>
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Link
              label="Studio"
              href="/studio"
              labelIcon={<ClapperboardIcon className="size-4" />}
            />
          </UserButton.MenuItems>
        </UserButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="px-4 py-2 text-sm font-medium text-blu-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none"
          >
            <UserCircle />
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
