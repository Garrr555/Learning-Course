/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import AddNewCourseDialog from "@/components/view/AddNewCourseDialog";
import CourseCard from "@/components/view/CourseCard";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { BookOpenText, Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function Explore() {
  const [courseList, setCourseList] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    user && GetCourseList();
  }, [user]);

  const GetCourseList = async () => {
    // const result = await axios.get("/api/courses?courseId=0");
    const result = await axios.get("/api/courses");
    console.log(result);
    setCourseList(result.data);
  };
  return (
    <div>
      <h2 className="font-bold text-3xl mb-6">Explore More Course</h2>
      <div className="flex gap-5 max-w-md mb-7">
        <Input placeholder="Search" />
        <Button className="bg-purple-500">
          <Search /> Search
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {courseList.length > 0
          ? courseList?.map((course: any, index: number) => (
              <CourseCard key={index} course={course} />
            ))
          : [0, 1, 2, 3, 4, 5].map((item, index: number) => (

                <Skeleton className="w-full h-[240px]" key={index}/>

            ))}
      </div>
    </div>
  );
}
