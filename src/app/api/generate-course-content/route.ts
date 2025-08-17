import { NextResponse } from "next/server";
import axios from "axios";
import { db } from "@/config/db";
import { courseTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { GoogleGenAI } from "@google/genai";

/* eslint-disable @typescript-eslint/no-explicit-any */
const PROPMT = `Depends on Chapter name and Topic Generate content for each topic in HTML and give response in JSON format.
Schema:{
chapterName:<>,
{
topic:<>,
content:<>
}
}
: User Input`;

export const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req: Request) {
  const { courseJson, courseTitle, courseId } = await req.json();

  const promies = courseJson?.chapters?.map(async (chapter: any) => {
    const config = {
      responseMimeType: "text/plain",
    };
    const model = "gemini-2.0-flash";
    const contents = [
      {
        role: "user",
        parts: [
          {
            text: PROPMT + JSON.stringify(chapter),
          },
        ],
      },
    ];

    const response = await ai.models.generateContent({
      model,
      config,
      contents,
    });
    // console.log(response?.candidates?.[0]?.content?.parts?.[0]?.text);
    const RawResp = response?.candidates?.[0]?.content?.parts?.[0]?.text;
    const RawJson = RawResp?.replace("```json", "").replace("```", "") ?? "";
    const JSONResp = JSON.parse(RawJson);

    //Generate Youtube Video

    const youtubeData = await GetYoutubeVideo(chapter?.chapterName);
    return {
      youtubeVideo: youtubeData,
      courseData: JSONResp,
    };
    // console.log({
    //   youtubeVideo: youtubeData,
    //   courseData: JSONResp,
    // });
  });

  const CourseContent = await Promise.all(promies);

  //Save to DB
  const dbResp = await db
    .update(courseTable)
    .set({ courseContent: CourseContent })
    .where(eq(courseTable.cid, courseId))
    .returning();

  console.log(dbResp);

  return NextResponse.json({
    courseName: courseTitle,
    courseContent: CourseContent,
  });
}

const YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3/search";
const GetYoutubeVideo = async (topic: string) => {
  const params = {
    part: "snippet",
    q: topic,
    maxResult: 4,
    type: "Video",
    key: process.env.YOUTUBE_API_KEY,
  };
  const resp = await axios.get(YOUTUBE_BASE_URL, { params });
  const youtubeVideoListResp = resp.data.items;
  const youtubeVideoList: any = [];
  youtubeVideoListResp.forEach((item: any) => {
    const data = {
      videoId: item?.id?.videoId,
      title: item?.snippet?.title,
    };
    youtubeVideoList.push(data);
  });
  console.log("youtubeVideoList", youtubeVideoList);
  return youtubeVideoList;
};
