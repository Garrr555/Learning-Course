import CourseList from "@/components/view/CourseList";
import EnrollCourseList from "@/components/view/EnrollCourseList";
import WelcomeBanner from "@/components/view/WelcomeBanner";
import React from "react";

export default function Workspace() {
  return (
    <div>
      <WelcomeBanner />
      <EnrollCourseList/>
      <CourseList />
    </div>
  );
}
