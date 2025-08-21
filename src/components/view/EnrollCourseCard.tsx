/* eslint-disable @typescript-eslint/no-explicit-any */
import { Book, LoaderCircle, PlayCircle, Settings } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Progress } from "../ui/progress";

export default function EnrollCourseCard({ course, enrollCourse }: any) {
  const courseJson = course?.courseJson?.course;

  const CalculatePerProgress = () => {
    return Math.round(
      (enrollCourse?.completedChapsters?.length /
        course?.courseContent?.length) *
        100
    );
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
      <div className="p-3 flex flex-col gap-3">
        <h2 className="font-bold text-lg">{courseJson?.name}</h2>
        <p className="line-clamp-3 text-justify text-gray-400 text-sm">
          {courseJson?.description}
        </p>
        <div className="">
          <h2 className="flex justify-between items-center text-sm lg:text-md text-purple-600">
            Progress <span>{CalculatePerProgress()} %</span>
          </h2>
          <Progress
            value={CalculatePerProgress()}
            className="bg-purple-200"
            bgBar="bg-purple-600"
          />
          <Link href={`/workspace/view-course/${course?.cid}`}>
            <Button className="w-full mt-3 bg-purple-500">
              <PlayCircle />
              Continue Learning
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
