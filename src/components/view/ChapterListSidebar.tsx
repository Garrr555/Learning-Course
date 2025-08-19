/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SelectedChapterIndexContext } from "@/context/SelectedChapterIndexContext";
import { useContext } from "react";

export default function ChapterListSidebar({ courseInfo }: any) {
  const course = courseInfo?.courses;
  const enrollCourse = courseInfo?.enrollCourse;
  const courseContent = course?.courseContent;
  const { selectedChapterIndex, setSelectedChapterIndex }: any = useContext(
    SelectedChapterIndexContext
  );

  return (
    <div className="w-80 bg-gray-100 h-screen p-5">
      <h2 className="my-3 font-bold text-xl">
        Chapters ({courseContent?.length})
      </h2>
      <Accordion type="single" collapsible>
        {courseContent?.map((chapter: any, index: number) => (
          <AccordionItem
            key={index}
            value={chapter?.courseData?.chapterName}
            onClick={() => setSelectedChapterIndex(index)}
          >
            <AccordionTrigger className="font-medium text-lg">
              {index + 1}. {chapter?.courseData?.chapterName}
            </AccordionTrigger>
            <AccordionContent asChild>
              <div className="">
                {chapter?.courseData?.topics.map(
                  (topic: any, index: number) => (
                    <h2 key={index} className="p-3 bg-white my-1 rounded-lg">
                      - {topic?.topic}
                    </h2>
                  )
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
