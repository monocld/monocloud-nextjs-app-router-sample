import { getSession } from "@monocloud/nextjs-auth";
import { SignIn, SignOut, SignUp } from "@monocloud/nextjs-auth/components";
import Link from "next/link";

export default async function Header() {
  const session = await getSession();

  return (
    <nav className='flex bg-slate-900 p-4 justify-between text-white'>
      {session?.user ? (
        <h1>Hello {session?.user?.email}</h1>
      ) : (
        <div>Welcome</div>
      )}

      <div className='flex gap-4'>
        <Link href='/'>Home</Link>
        {session?.user ? (
          <>
            <Link href={"/server"}>Server Page</Link>
            <Link href={"/client"}>Client Page</Link>
            <SignOut>Sign Out</SignOut>
          </>
        ) : (
          <>
            <SignIn>Sign In</SignIn>
            <SignUp>Sign Up</SignUp>
          </>
        )}
      </div>
    </nav>
  );
}
