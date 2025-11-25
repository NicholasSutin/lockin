import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-min-full">
      <video src="brick-taken.mp4" loop autoPlay muted controls className="w-full"/>
    </div>
  );
}