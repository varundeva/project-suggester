import { auth, signIn } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await auth()
  if (session) {
   redirect("/")
  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="shadow-md rounded-lg p-8 w-full max-w-md text-center flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome Back!</h1>
        <p className="text-gray-600 mb-8">
          Sign in with your GitHub account to get started.
        </p>

        <form
      action={async () => {
        "use server"
        await signIn("github", { callbackUrl: "/analyse" })
      }}
    >
      <button
          className="w-full flex justify-between items-center bg-gray-500 hover:bg-gray-800 text-white py-2 px-4 rounded-lg text-lg font-medium transition-colors"
        type="submit"
       >
          Login with GitHub
          <Image src="https://authjs.dev/img/providers/github.svg" alt={"GitHub"} height={24} width={24} loading="lazy" className="ml-2"/>
          
        </button>
    </form>

        
      </div>
    </div>
  );
}
