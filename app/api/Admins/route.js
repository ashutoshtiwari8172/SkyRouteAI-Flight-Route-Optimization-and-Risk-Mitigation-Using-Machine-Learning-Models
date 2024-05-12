import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import Admin from "@/app/(models)/Admin";

export async function POST(req) {
  try {
    const body = await req.json();
    const userData = body.formData;

    //Confirm data exists
    if (!userData?.email || !userData.password) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // check for duplicate emails
    const duplicate = await Admin.findOne({ email: userData.email })
      .lean()
      .exec();

    if (duplicate) {
      return NextResponse.json({ message: "Duplicate Email" }, { status: 409 });
    }

    const hashPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashPassword;

    await Admin.create(userData);
    return NextResponse.json({ message: "Admin Created." }, { status: 201 });
  } catch (error) {
    console.log(err);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
