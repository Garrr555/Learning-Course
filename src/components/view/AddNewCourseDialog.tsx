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
import { Sparkle } from "lucide-react";
import { useState } from "react";

export default function AddNewCourseDialog({ children }: any) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    includeVideo: false,
    noOfChapter: 1,
    category: "",
    level: "",
  });

  const onHandleInputChange = (field: any, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    console.log(formData);
  };

  const onGenerate = () => {
    console.log(formData);
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
                    onHandleInputChange("noOfChapter", event?.target.value)
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
                  className="w-full bg-gradient-to-tr hover:bg-gradient-to-bl from-blue-500 to-purple-500  "
                >
                  <Sparkle /> Generate Course
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
