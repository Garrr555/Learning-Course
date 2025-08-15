import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center h-screen">
      <Button size={"lg"}>
        <Link href={"/workspace"}>WORK SPACE</Link>
      </Button>
    </div>
  );
}
