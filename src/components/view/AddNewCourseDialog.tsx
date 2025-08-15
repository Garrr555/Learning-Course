"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Loader2Icon, Sparkle } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

export default function AddNewCourseDialog({ children }: any) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    includeVideo: false,
    noOfChapters: 1,
    category: "",
    level: "",
  });
  const router = useRouter();

  const onHandleInputChange = (field: any, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    console.log(formData);
  };

  const onGenerate = async () => {
    console.log(formData);
    const courseId = uuidv4();
    try {
      setLoading(true);
      const result = await axios.post("/api/generate-course-layout", {
        ...formData,
        courseId: courseId,
      });
      console.log(result.data);
      setLoading(false);
      toast.success("Generating course layout");
      router.push(`/workspace/edit-course/` + result.data?.courseId);
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Course Using AI</DialogTitle>
          <DialogDescription asChild>
            <div className=" flex flex-col gap-4 mt-4">
              <div>
                <label htmlFor="">Course Name</label>
                <Input
                  placeholder="Course Name"
                  onChange={(event) =>
                    onHandleInputChange("name", event?.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="">Course Description (optional) </label>
                <Textarea
                  placeholder="Course Description"
                  onChange={(event) =>
                    onHandleInputChange("description", event?.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="">No. Of Chapters</label>
                <Input
                  placeholder="No of chapters"
                  type="number"
                  onChange={(event) =>
                    onHandleInputChange("noOfChapters", event?.target.value)
                  }
                />
              </div>
              <div className="flex gap-3">
                <label htmlFor="">Include Video</label>
                <Switch
                  className="data-[state=checked]:bg-green-500"
                  onCheckedChange={() =>
                    onHandleInputChange("includeVideo", !formData?.includeVideo)
                  }
                />
              </div>
              <div>
                <label htmlFor="" className="">
                  Difficuly Level
                </label>
                <Select
                  onValueChange={(value) => onHandleInputChange("level", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Difficuly" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="advance">Advance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="">Category</label>
                <Input
                  placeholder="Category (Sperated by Comma)"
                  onChange={(event) =>
                    onHandleInputChange("category", event?.target.value)
                  }
                />
              </div>

              <div className="mt-5">
                <Button
                  onClick={onGenerate}
                  disabled={loading}
                  className="w-full bg-gradient-to-tr hover:bg-gradient-to-bl from-blue-500 to-purple-500  "
                >
                  {loading ? (
                    <Loader2Icon className="animate-spin" />
                  ) : (
                    <Sparkle />
                  )}{" "}
                  Generate Course
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
