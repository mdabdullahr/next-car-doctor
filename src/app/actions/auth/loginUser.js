"use server";

import bcrypt from "bcrypt";
import DBConnect, { collectionsNameObj } from "@/lib/DBConnect";

export const loginUser = async(payload) => {
    const usersCollection = DBConnect(collectionsNameObj.usersCollection);
    const {email, password} = payload;
    const user = await usersCollection.findOne({email});

    if(!user) return null;

    const isPasswordOk = bcrypt.compare(user.password, password);
    if(!isPasswordOk) return null;

    return user;

}