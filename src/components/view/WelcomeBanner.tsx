export default function WelcomeBanner() {
  return (
    <div className=" relative p-[2px] rounded-full overflow-hidden w-full flex items-center justify-center">
      {/* Layer background gradasi berputar */}
      <div className="absolute inset-0 bg-gradient-to-l from-yellow-500 to-green-500 spin-very-slow"></div>

      {/* Layer isi (ikon tetap diam) */}
      <div className="relative bg-white text-purple-400 rounded-full flex items-center justify-center w-full h-full">
        <div className="rounded-full p-5 bg-gradient-to-tl from-purple-600 via-blue-600 to-blue-400 w-full">
          <h2 className="font-bold text-2xl text-white">
            Welcome to Online Learning Platform
          </h2>
          <p className="text-white">
            Learn, Create and Explore Your favorite course
          </p>
        </div>
      </div>
    </div>
  );
}
