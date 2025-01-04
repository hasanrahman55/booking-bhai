"use server";
import { createAdminClient } from "@/config/appwrite";
import { ID } from "node-appwrite";

async function createUser(previousState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirm-password");

  if (!email || !password || !name) {
    return {
      error: "Please fill out all fields",
    };
  }
  if (password.length < 8) {
    return {
      error: "Password must be at least 8 characters",
    };
  }

  if (password !== confirmPassword) {
    return {
      error: "Passwords do not match",
    };
  }

  //get account instance
  const { account } = await createAdminClient();
  try {
    console.log(email, password, name);

    await account.create(ID.unique(), email, password, name);
    return {
      success: true,
    };
  } catch (error) {
    console.log("Failed to create user", error);
    return {
      error: "Failed to create user",
    };
  }
}

export default createUser;
