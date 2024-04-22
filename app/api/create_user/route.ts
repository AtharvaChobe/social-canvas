import dbInit from "@/dbInit";
import userModel from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req: any, res: any) {
    await dbInit();
    try {
        const { clerkId, fullName, email } = await req.json();

        const existingUser = await userModel.findOne({ clerkId: clerkId }); // Query by clerkId

        if (!existingUser) {
            const created_user = await userModel.create({ clerkId, fullName, email });
            return NextResponse.json({ message: "user created" });
        } else {
            return NextResponse.json({ message: "user already exists" }); // Handle case where user already exists
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "failed to create user" });
    }
}
