import CourseList from "@/components/view/CourseList";
import WelcomeBanner from "@/components/view/WelcomeBanner";
import React from "react";

export default function Workspace() {
  return (
    <div>
      <WelcomeBanner />
      <CourseList />
    </div>
  );
}
