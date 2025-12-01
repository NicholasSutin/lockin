import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full p-4">
      <div className="max-w-250 mx-auto">
        <h1 className="text-3xl text-center font-switzer">
          LockIn © turns your phone back into a tool
        </h1>

        <div className="mt-4">
          <Image
            src="/LockPhone.png"   // lives in /public
            alt="LockIn phone"
            className="w-full rounded-md"
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
}
