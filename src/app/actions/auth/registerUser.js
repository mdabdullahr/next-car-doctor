"use server";
import bcrypt from "bcrypt";
import DBConnect, { collectionsNameObj } from "@/lib/DBConnect";

export const registerUser = async (payload) => {
  const usersCollection = DBConnect(collectionsNameObj.usersCollection);

  const { name, email, password } = payload;

  // Validate
  if (!name || !email || !password) {
    return {
      success: false,
      message: "All fields (name, email, password) are required.",
    };
  }

  // Check if user already exists
  const existingUser = await usersCollection.findOne({ email });
  if (existingUser) {
    return {
      success: false,
      message: "User already registered with this email.",
    };
  }

  // Hash and insert
  const hashPassword = await bcrypt.hash(password, 10);
  payload.password = hashPassword;

  const result = await usersCollection.insertOne(payload);

  if (result.acknowledged) {
    return {
      success: true,
      message: "User registered successfully.",
      insertedId: result.insertedId.toString(),
    };
  } else {
    return {
      success: false,
      message: "Failed to register user.",
    };
  }
};
