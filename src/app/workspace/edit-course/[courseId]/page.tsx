/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ChapterTopicList from "@/components/view/ChapterTopicList";
import CourseInfo from "@/components/view/CourseInfo";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditCourse({ viewCourse = false }: any) {
  const { courseId } = useParams();
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState({});

  useEffect(() => {
    GetCourseInfo();
  }, []);

  const GetCourseInfo = async () => {
    const result = await axios.get("/api/courses?courseId=" + courseId);
    console.log(result.data);
    setLoading(false);
    setCourse(result.data);
  };

  return (
    <div>
      <CourseInfo course={course} viewCourse={viewCourse} />
      <ChapterTopicList course={course} />
    </div>
  );
}
