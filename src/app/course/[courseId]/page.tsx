"use client";

import AppHeader from "@/components/view/AppHeader";
import ChapterContent from "@/components/view/ChapterContent";
import ChapterListSidebar from "@/components/view/ChapterListSidebar";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Course() {
  const [courseInfo, setCourseInfo] = useState();
  const { courseId } = useParams();

  useEffect(() => {
    GetEnrollCourseById();
  }, []);

  const GetEnrollCourseById = async () => {
    const result = await axios.get("/api/enroll-course?courseId=" + courseId);
    console.log(result.data);
    setCourseInfo(result.data);
  };
  return (
    <div>
      <AppHeader hideSidebar={true} />
      <div className="flex gap-10">
        <div className="w-64 sticky top-0 h-screen">
          <ChapterListSidebar courseInfo={courseInfo} />
        </div>
        <div className="flex-1">
          <ChapterContent courseInfo={courseInfo} />
        </div>
      </div>
    </div>
  );
}
