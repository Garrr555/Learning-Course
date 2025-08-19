/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import EnrollCourseCard from "./EnrollCourseCard";

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
      <div className="mt-10">
        <h2 className="font-bold text-xl mb-5">Continue Learning your courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {enrolledCourseList?.map((course: any, index: number) => (
            <EnrollCourseCard
              key={index}
              course={course?.courses}
              enrollCourse={course?.enrollCourse}
            />
          ))}
        </div>
      </div>
    )
  );
}
