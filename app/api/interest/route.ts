import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Received body:", body);

    const { name, email, phone, product } = body;

    const { data, error } = await supabase
      .from("interests")
      .insert([{ name, email, phone, product }])
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { success: false, error: error.message },{ status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ success: false, error: "Server error" },{ status: 500 });
  }
}