import { Button } from "@/components/ui/button";
import FileUpload from "@/components/ui/FileUpload";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { LogIn } from "lucide-react";




export default async function Home() {
  const {userId} = await auth()
  const isAuth = !!userId; 
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
          <h1  className="text-5xl mr-3 font-semibold">
          Ask Your PDF
          </h1> 
        <UserButton afterSignOutUrl="/"/>
        </div>
        <div className="flex mt-2">
          {isAuth &&   <Button className="te-center"> Let's Ask</Button>}
        </div>
        <p  className="max-w-xl mt-1 text-lg text-slate-600 text-center">
        Join a community of students, researchers, and professionals who are leveraging AI to ask their questions on AskYourPDF </p>
        <div className="w-full mt-4">
          {isAuth ? (
           <FileUpload />
           ) : (
            <Link href='/sign-in'>
            <Button className="items-center">
              Login to get Started
              <LogIn className="w-4 h-4 ml-2" />
            </Button>
            </Link>
          )}
        </div></div>
      </div></div>
  )
};
