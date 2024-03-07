import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 mx-auto py-10">
      <div className="flex flex-col text-center w-full">
        <h1 className="sm:text-3xl font-bold title-font text-gray-900">Join Our Community</h1>
      </div>
      <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-center justify-center">
        <SignUp/>
      </div>
    </div>
  </section>
  )
}