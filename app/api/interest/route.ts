import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, phone, product } = body;

  const { error } = await supabase
    .from("interests")
    .insert([{ name, email, phone, product }]);

  if (error) {
    console.log("Supabase error:", error);
    return NextResponse.json({ success: false });
  }

  return NextResponse.json({ success: true });
}
