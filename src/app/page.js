import { redirect } from "next/navigation";
import { auth, signOut } from "./auth"


export default async function Page() {
  const session = await auth();
  if(!session){
    redirect("/api/auth/signin?callbackUrl=/")
  }

  
    return (
      <>
        <h1>Protected Page</h1>
        <p>You can view this page because you are signed in.</p>
        <button onClick={async () => {
          'use server'
          await signOut()
        }}>Sign out</button>
      </>
    )
  
}

