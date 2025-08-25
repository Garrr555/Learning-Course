import EnrollCourseList from "@/components/view/EnrollCourseList";
import WelcomeBanner from "@/components/view/WelcomeBanner";

export default function MyLearning() {
  return (
    <div>
      <WelcomeBanner />
      <h2 className="font-bold text-2xl mt-5">My Learning</h2>
      <EnrollCourseList />
    </div>
  );
}
