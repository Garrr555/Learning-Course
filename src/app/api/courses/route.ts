import { db } from "@/config/db";
import { courseTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const courseId = searchParams.get("courseId");

  if (!courseId) {
    // Handle the case where courseId is null or undefined
    // You can return an error response or a default value
    return NextResponse.json({ error: "Course ID is required" });
  }

  const result = await db
    .select()
    .from(courseTable)
    .where(eq(courseTable.cid, courseId));

  console.log(result);

  return NextResponse.json(result[0]);
}
