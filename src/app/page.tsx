import Image from "next/image";

import { AccordionDemo } from "@/components/accordion-demo";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

import {
  BrickWall,
  TabletSmartphone,
  Zap,
  ShieldUser
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      <div className="max-w-250 mx-auto p-4">

        <div className="grid grid-cols-1 md:grid-cols-2 mb-6 md:mb-0 ">
          <Image
            src="/HandHeld.png"
            alt="Hand Held"
            className="w-full rounded-md bg-accent mb-8"
            width={800}
            height={800}
          />
          <div className="flex flex-col gap-4 justify-center items-center mx-4">
            <h1 className="text-3xl text-center font-switzer">Introducing Block</h1>
            <p className="text-center max-w-md mx-auto">
              A physical device that temporarily removes distracting apps & their notifications from your phone. Designed for simplicity. No subscriptions. No complex setups. Just more time for what matters.
            </p>
            <Button variant="secondary" className="hover:cursor-pointer mx-auto">
              Shop Cyber Monday
            </Button>
          </div>
        </div>

        <AccordionDemo />
      </div>

      <div className="bg-accent">
        <div className="max-w-250 mx-auto p-4">
          <h1 className="text-3xl text-center font-switzer mb-4 py-6">
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

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 col-span-2 *:border *:p-4 *:rounded-sm mt-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BrickWall />
                  <h3 className="font-semibold text-xl">Physical Control</h3>
                </div>
                <p>Tap to lock, tap to unlock. No complicated settings or willpower required.</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TabletSmartphone />
                  <h3 className="font-semibold text-xl">Works with Any Phone</h3>
                </div>
                <p>Compatible with both iOS and Android devices with NFC capability.</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Zap />
                  <h3 className="font-semibold text-xl">Instant Action</h3>
                </div>
                <p>No apps to open, no buttons to press. Just tap and lock in milliseconds.</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ShieldUser />
                  <h3 className="font-semibold text-xl">Privacy First</h3>
                </div>
                <p>Your data stays on your device. No tracking, no cloud, no compromise.</p>
              </div>
            </div>

            <Footer />

          </div>
        </div>

    </div>
  );
}
