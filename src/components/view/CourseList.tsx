"use client";

import Image from "next/image";
import { useState } from "react";
import { BookOpenText } from "lucide-react";
import { Button } from "../ui/button";
import AddNewCourseDialog from "./AddNewCourseDialog";

export default function CourseList() {
  const [courseList, setCourseList] = useState([]);
  return (
    <div className="mt-10">
      <h2 className="font-bold text-3xl">Course List</h2>

      {courseList?.length === 0 ? (
        <div className=" flex flex-col p-7 items-center justify-center border rounded-xl mt-2 bg-secondary">
          <div className="relative p-[4px] rounded-full overflow-hidden w-[110px] h-[110px] flex items-center justify-center">
            {/* Layer background gradasi berputar */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 spin-slow"></div>

            {/* Layer isi (ikon tetap diam) */}
            <div className="relative bg-white text-purple-400 rounded-full flex items-center justify-center w-full h-full">
              <BookOpenText size={80} />
            </div>
          </div>

          <h2 className="my-2 text-xl font-bold">
            Look like you haven&apos;t created any course yet
          </h2>

          <AddNewCourseDialog>
            <Button className="cursor-pointer hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-gradient-to-r from-purple-500 to-blue-500 transition-all hover:duration-300 ease-in-out">
              + Create your firts course
            </Button>
          </AddNewCourseDialog>
        </div>
      ) : (
        <div>List of Course</div>
      )}
    </div>
  );
}
