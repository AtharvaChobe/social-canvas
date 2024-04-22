import dbInit from "@/dbInit";
import userModel from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(req: any, res: any) {
    await dbInit();
    try {
        const url = new URL(req.url);

        const id = url.searchParams.get("id")

        const user = await userModel.findOne({ clerkId: id });

        // // Check if user exists
        // if (!user) {
        //     return NextResponse.json({ message: "User not found" });
        // }

        return NextResponse.json({ user });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Failed to fetch user" });
    }
}
