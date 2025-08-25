import { UserProfile } from "@clerk/nextjs";

export default function Profile() {
  return (
    <div>
      <h2 className="font-bold text-3xl mb-10">Manage your profile</h2>
      <UserProfile />
    </div>
  );
}
