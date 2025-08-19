'use client';

import { useParams } from "next/navigation";
import EditCourse from "../../edit-course/[courseId]/page";

export default function ViewCourse() {
  // const {courseId} = useParams();
  return (
    <div>
      <EditCourse viewCourse={true}/>
    </div>
  )
}

 