"use server";

import { createSessionClient } from "@/config/appwrite";
import { cookies } from "next/headers";

async function destroySession() {
  //retrive session from cookies
  const sessionCookies = (await cookies()).get("appwrite-session");

  if (!sessionCookies) {
    return {
      error: "No session found",
    };
  }
  try {
    const { account } = await createSessionClient(sessionCookies.value);
    //delete session
    await account.deleteSession("current");

    //delete cookie
    (await cookies()).delete("appwrite-session");
    return {
      success: true,
    };
  } catch (error) {
    console.log("Failed to destroy session", error);
    return {
      error: "Failed to destroy session",
    };
  }
}

export default destroySession;
