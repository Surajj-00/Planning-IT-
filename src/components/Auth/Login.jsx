// import React from 'react'

// const Login = () => {
//   return (

//     <div className="min-h-screen flex flex-col justify-center items-center bg-background text-foreground">
//     <div className="p-8 bg-card shadow-lg rounded-lg max-w-sm w-full">
//       <h1 className="text-xl font-bold mb-6">Welcome Back!</h1>
//       <form>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
//             Email Address
//           </label>
//           <input type="email" id="email" name="email" className="bg-input border border-border rounded-md w-full p-2 text-foreground outline-none" placeholder="Enter your email" />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
//             Password
//           </label>
//           <input type="password" id="password" name="password" className="bg-input border border-border rounded-md w-full p-2 text-foreground outline-none" placeholder="Enter your password" />
//         </div>
//         <button type="submit" className="bg-black text-white w-full p-2 rounded-md hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
//           Log In
//         </button>
//       </form>

//       <div className="mt-6 text-center">
//         <p className="text-muted-foreground">
//           Don't have an account?
//           <button
//             className="bg-blue-600 text-white ml-6 px-3 py-1 rounded-md hover:bg-blue-600/80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
//             onClick="alert('Redirect to signup')">
//             Sign Up
//           </button>
//         </p>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Login


"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function SignupFormDemo() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    (<div
      className="max-w-md w-full mx-auto rounded-none md:rounded-2xl my-6 p-4 md:p-8 shadow-input bg-black border border-neutral-800">
      <h2 className="font-bold text-xl text-neutral-200">
        Welcome to EM - System
      </h2>
      <p className=" text-sm max-w-sm mt-2 text-neutral-300">
        Login to manage if you can because we don&apos;t have a login flow yet .
      </p>
      <form className="mt-8" onSubmit={handleSubmit}>
        <div
          className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Jersu" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Haus" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="hausjersu@gmail.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        {/* <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Your twitter password</Label>
          <Input id="twitterpassword" placeholder="••••••••" type="twitterpassword" />
        </LabelInputContainer> */}

        <button
          className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset], shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit">
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div
          className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit">
            <IconBrandGithub className="h-4 w-4 text-neutral-300" />
            <span className="text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit">
            <IconBrandGoogle className="h-4 w-4 text-neutral-300" />
            <span className="text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit">
            <IconBrandLinkedin className="h-4 w-4 text-neutral-300 " />
            <span className="text-neutral-300 text-sm">
              LinkedIn
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>)
  );
}

const BottomGradient = () => {
  return (<>
    <span
      className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span
      className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>);
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    (<div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>)
  );
};
