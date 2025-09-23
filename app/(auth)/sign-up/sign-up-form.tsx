'use client'

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signUpUser } from "@/lib/actions/user.actions";
// import { useSearchParams } from "next/navigation";

const SignUpForm = () => {
  const [data, action] = useActionState(signUpUser, {
    success: false,
    message: "",
  });

  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignUpButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button disabled={pending} className="w-full" variant="default">
        { pending ? "Submitting..." : "Sign Up" }
      </Button>
    )
  }

  return (
    <form action={action}>
      {/*<input className="hidden" name="callbackUrl" value={callbackUrl} />*/}
      <div className="space-y-6">
        <div>
          <Label htmlFor="name" className="mb-2">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Fullname"
            autoComplete="name"
            defaultValue=""/>
        </div>
        <div>
          <Label htmlFor="email" className="mb-2">Email</Label>
          <Input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            autoComplete="email"
            defaultValue=""/>
        </div>
        <div>
          <Label htmlFor="password" className="mb-2">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required
            autoComplete="password"
            defaultValue=""/>
        </div>
        <div>
          <Label htmlFor="confirmPassword" className="mb-2">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
            autoComplete="confirmPassword"
            defaultValue=""/>
        </div>
        <div>
          <SignUpButton />
        </div>
        {data && !data.success && (
          <div className="text-center text-destructive">
            {data.message}
          </div>
        )}
        <div className="text-sm text-center text-muted-foreground">
          Already have an account?{" "}
          <Link href="/sign-in" target="_self" className="link">
            Sign In
          </Link>
        </div>
      </div>
    </form>
  )
}

export default SignUpForm;