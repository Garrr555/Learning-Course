"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { Book, Clock, Loader2Icon, Settings, TrendingUp } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CourseInfo({ course }: any) {
  const courseLayout = course?.courseJson?.course;
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const GenerateGetCourseContent = async () => {
    // generate course content
    setLoading(true);
    try {
      const result = await axios.post("/api/generate-course-content", {
        courseJson: courseLayout,
        courseTitle: course?.name,
        courseId: course?.cid,
      });
      console.log(result.data);
      setLoading(false);
      router.replace("/workspace");
      toast.success("Generating course content");
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="flex flex-col-reverse lg:flex-row-reverse gap-5 justify-between p-5 rounded-2xl shadow">
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-3xl">{courseLayout?.name}</h2>
        <p className="line-clamp-2 text-gray-500">
          {courseLayout?.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="flex gap-5 items-center p-3 rounded-lg shadow">
            <Clock className="text-blue-500" />
            <section>
              <h2 className="font-bold">Duration </h2>
              <h2>2 Hours</h2>
            </section>
          </div>
          <div className="flex gap-5 items-center p-3 rounded-lg shadow">
            <Book className="text-green-500" />
            <section>
              <h2 className="font-bold">Chapters </h2>
              <h2>2 Hours</h2>
            </section>
          </div>
          <div className="flex gap-5 items-center p-3 rounded-lg shadow">
            <TrendingUp className="text-red-500" />
            <section>
              <h2 className="font-bold">Difficulty Level </h2>
              <h2>{course?.level}</h2>
            </section>
          </div>
        </div>
        <Button
          onClick={GenerateGetCourseContent}
          className="bg-green-600 max-w-full"
        >
          {loading ? (
            <div className="flex gap-2 items-center animate-spin">
              <Loader2Icon />
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <Settings /> Generate Content
            </div>
          )}
        </Button>
      </div>
      <Image
        src={course?.bannerImageUrl || "/online-education.jpg"}
        alt="Course Image"
        width={400}
        height={400}
        className="w-full mt-5 lg:mt-0 object-cover aspect-auto h-[240px] rounded-2xl"
      />
    </div>
  );
}
