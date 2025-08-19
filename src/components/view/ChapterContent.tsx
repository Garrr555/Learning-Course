/* eslint-disable @typescript-eslint/no-explicit-any */

import { SelectedChapterIndexContext } from "@/context/SelectedChapterIndexContext";
import { Video } from "lucide-react";
import { useContext } from "react";
import YouTube from "react-youtube";

export default function ChapterContent({ courseInfo }: any) {
  const { course, enrollCourse } = courseInfo ?? "";
  const courseContent = courseInfo?.courses?.courseContent;
  const { selectedChapterIndex, setSelectedChapterIndex }: any = useContext(
    SelectedChapterIndexContext
  );
  const videoData = courseContent?.[selectedChapterIndex]?.youtubeVideo;
  const topics = courseContent?.[selectedChapterIndex]?.courseData?.topics;

  return (
    <div className="p-10 w-full">
      <h2 className="font-bold text-2xl">
        {selectedChapterIndex + 1}.{" "}
        {courseContent?.[selectedChapterIndex]?.courseData?.chapterName}
      </h2>

      <h2 className="my-2 font-bold text-lg flex items-center gap-2">
        Related Videos <Video className="text-purple-500" />
      </h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-10 ">
        {videoData?.map((video: any, index: number) => (
          <div key={index} className="flex flex-col">
            <YouTube
              videoId={video?.videoId}
              opts={{
                height: "250",
                width: "400",
              }}
            />
            <h2 className="max-w-[400px]">{video?.title}</h2>
          </div>
        ))}
      </div>

      <div className="mt-7">
        {topics?.map((topic: any, index: number) => (
          <div key={index} className="mt-10 p-5 bg-gray-200 rounded-2xl">
            <h2 className="font-bold text-2xl text-purple-500">
              {index + 1}. {topic?.topic}
            </h2>
            {/* <p>{topic?.content}</p> */}
            <div
              dangerouslySetInnerHTML={{ __html: topic?.content }}
              style={{
                lineHeight: "2.5",
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
