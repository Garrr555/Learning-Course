"use client";

import { Book, LoaderCircle, PlayCircle, Settings } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function CourseCard({ course }: any) {
  const courseJson = course?.courseJson?.course;
  const [loading, setLoading] = useState(false);

  const onEnrollCourse = async () => {
    try {
      setLoading(true);
      const result = await axios.post("/api/enroll-course", {
        courseId: course?.cid,
      });
      console.log(result.data);
      if (result.data.resp) {
        toast.warning("Already enrolled");
        setLoading(false);
        return;
      }
      toast.success("Enrolling course");
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="shadow rounded-xl">
      <Image
        src={course?.bannerImageUrl || "/online-education.jpg"}
        width={400}
        height={300}
        alt={course?.name}
        className="w-full aspect-video h-[250px] object-cover rounded-t-xl"
      />
      <div className="p-3 flex flex-col gap-3 justify-between min-h-60">
        <div>
          <h2 className="font-bold text-lg">{courseJson?.name}</h2>
          <p className="line-clamp-3 text-justify text-gray-400 text-sm">
            {courseJson?.description}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="flex items-center gap-2 text-sm">
            <Book className="text-purple-600 h-5 w-5" />{" "}
            {courseJson?.noOfChapters} Chapters
          </h2>
          {course?.courseContent?.length ? (
            <Button
              size={"sm"}
              className="bg-purple-600"
              onClick={onEnrollCourse}
              disabled={loading}
            >
              {loading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                <PlayCircle />
              )}{" "}
              Enroll Learning
            </Button>
          ) : (
            <Link href={`/workspace/edit-course/${course?.cid}`}>
              <Button size={"sm"} className="" variant={"outline"}>
                <Settings /> Generate Course
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
