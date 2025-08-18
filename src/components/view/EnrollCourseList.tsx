/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function EnrollCourseList() {
  const [enrolledCourseList, setEnrolledCourseList] = useState([]);

  useEffect(() => {
    GetEnrollCourse();
  }, []);

  const GetEnrollCourse = async () => {
    const result = await axios.get("/api/enroll-course");
    console.log(result.data);
    setEnrolledCourseList(result.data);
  };
  return (
    enrolledCourseList?.length > 0 && (
      <div className="mt-3">
        <h2 className="font-bold text-xl">Continue Learning your courses</h2>

        {enrolledCourseList?.map((course: any, index: number) => (
          <div key={index}></div>
        ))}
      </div>
    )
  );
}
