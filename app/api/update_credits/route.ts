import dbInit from "@/dbInit"
import userModel from "@/models/user";
import { NextResponse } from "next/server"

export async function PUT(req:any){
    try {
        await dbInit();
        const url = new URL(req.url);
        const id = url.searchParams.get("id");
        const user = await userModel.findOne({ clerkId: id });

        user.credits -= 1;
        await user.save();
        
        return NextResponse.json({user});
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"failed to update"})
    }
}