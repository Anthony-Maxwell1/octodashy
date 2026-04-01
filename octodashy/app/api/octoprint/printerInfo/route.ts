import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const res = await fetch(`${process.env.OCTOPRINT_URL}/api/printer`, {
    method: "GET",
    headers: {
      "X-Api-Key": process.env.TOKEN!,
    },
  });
  return NextResponse.json(res.json());
}
