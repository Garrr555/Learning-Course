import { db } from "@/config/db";
import { courseTable, enrollCourseTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { and, desc, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { courseId } = await req.json();
  const user = await currentUser();

  //if Course already enrolled
  const enrollCourse = await db
    .select()
    .from(enrollCourseTable)
    .where(
      and(
        eq(
          enrollCourseTable.userEmail,
          user?.primaryEmailAddress?.emailAddress ?? ""
        ),
        eq(enrollCourseTable.cid, courseId)
      )
    );

  if (enrollCourse?.length == 0) {
    const result = await db
      .insert(enrollCourseTable)
      .values({
        cid: courseId,
        userEmail: user?.primaryEmailAddress?.emailAddress ?? "",
      })
      .returning();

    return NextResponse.json(result);
  }

  return NextResponse.json({ resp: "Already Enrolled" });
}

export async function GET(req: Request) {
  const user = await currentUser();
  const result = await db
    .select()
    .from(courseTable)
    .innerJoin(enrollCourseTable, eq(courseTable.cid, enrollCourseTable.cid))
    .where(
      eq(
        enrollCourseTable.userEmail,
        user?.primaryEmailAddress?.emailAddress ?? ""
      )
    )
    .orderBy(desc(enrollCourseTable.id));

  return NextResponse.json(result);
}
