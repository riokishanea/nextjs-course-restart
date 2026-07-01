import User from "@/database/user.model";
import handleError from "@/lib/handlers/error";
import { ValidationError } from "@/lib/http-error";
import dbConnect from "@/lib/mongoose";
import { UserSchema } from "@/lib/validation";
import { APIErrorResponse } from "@/types/global";
import { NextResponse } from "next/server";
import z, { success } from "zod";

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find();
    return NextResponse.json({ success: true, data: users }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

//Create User
export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();

    const validateData = UserSchema.safeParse(body);

    if (!validateData.success) {
      throw new ValidationError(z.flattenError(validateData.error).fieldErrors);
    }

    const { email, username } = validateData.data;

    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error("User Already Exist");

    const existingUsername = await User.findOne({ username });
    if (existingUsername) throw new Error("User Already Exist");

    const newUser = await User.create(validateData.data);

    return NextResponse.json({ success: true, data: newUser }, { status: 201 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
