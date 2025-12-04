import Image from "next/image";
import usingPhone from "../../../public/using-phone.webp";
import sleepWithoutPhone from "../../../public/sleep-without-phone.webp";
import stayAsleep from "../../../public/stay-asleep.webp";
import wakeUp from "../../../public/wake-up.webp";

import { Brain, Users, RefreshCw, Heart } from 'lucide-react';

import { RotatingText } from "@/components/ui/shadcn-io/rotating-text";

export default function Shop() {
  return (
    <div className="relative w-full">
      {/* background image */}
      <div className="relative w-full">
        <Image
          src={usingPhone}
          alt="Portable audio hero"
          priority
          sizes="100vw"
          className="w-full h-auto"
        />

        {/* Text overlay - centered at 10% down the image height */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ paddingTop: "10%" }}
        >
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-accent font-serif leading-normal">
              Minimal friction, <br /> not maximum configuration.
            </h1>
            <p className="mt-2 text-sm md:text-base text-accent">
              Engineered for people who just want to get stuff done.
            </p>
          </div>
        </div>
      </div>

      <h1 className="py-20 text-3xl md:text-4xl text-center w-full font-light font-serif">
        A Solution Built For Real Life
      </h1>

      <div className="flex flex-col-1 md:flex-col-3 gap-8 px-6 my-auto justify-center">
        <div>
            <Image
            src={sleepWithoutPhone}
            alt="Portable audio hero"
            priority
            className="w-full h-auto"
            />
            <h1 className="text-3xl font-serif my-6">Fall asleep without your phone</h1>
        </div>
        <div>
            <Image
            src={stayAsleep}
            alt="Portable audio hero"
            priority
            className="w-full h-auto"
            />
            <h1 className="text-3xl font-serif my-6">Rest Easy Without Disruption</h1>
        </div>
        <div>
            <Image
            src={wakeUp}
            alt="Portable audio hero"
            priority
            className="w-full h-auto"
            />
            <h1 className="text-3xl font-serif my-6">Wake up with clarity and ease</h1>
        </div>
      </div>

      <div className="w-full">
        <section className="w-full bg-[#f5f1e8] px-4 mt-40 py-20 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Headline */}
                <div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight text-gray-900">
                    Not Just Smarter —<br />
                    Actually Better For<br />
                    Your Brain
                    </h2>
                </div>

              {/* Right Column - Features */}
                <div className="space-y-8">
                    <div className="flex gap-4 items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                        <p className="text-lg text-gray-900 leading-relaxed">
                        Built with behavioral scientists, not just engineers
                        </p>
                    </div>
                    </div>

                    <div className="flex gap-4 items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                        <RefreshCw className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                        <p className="text-lg text-gray-900 leading-relaxed">
                        Designed to replace habits, not add more noise
                        </p>
                    </div>
                    </div>

                    <div className="flex gap-4 items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                        <p className="text-lg text-gray-900 leading-relaxed">
                        Trusted by thousands to reset their relationship with rest
                        </p>
                    </div>
                    </div>
                </div>


                </div>
            </div>
        </section>

              <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-16 text-gray-900">
            Made For People Like You
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-serif mb-3 text-gray-900">Busy Professionals</h3>
              <p className="text-gray-600 leading-relaxed">
                You know your phone habit is affecting your sleep, but breaking it feels impossible with everything on your plate.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-serif mb-3 text-gray-900">Overthinkers</h3>
              <p className="text-gray-600 leading-relaxed">
                Your mind races at night, and scrolling has become your default wind-down—even though you know it's making things worse.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-serif mb-3 text-gray-900">Health-Conscious</h3>
              <p className="text-gray-600 leading-relaxed">
                You invest in your well-being but struggle to disconnect from technology when it matters most—at night.
              </p>
            </div>
          </div>
        </div>
      </section>

           {/* Why is it useful section */}
      <section className="w-full px-4 py-20 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight text-gray-900 mb-6">
                Why is it useful?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                This device helps reduce procrastination by removing the urge of checking your phone. By securing the phone for a set amount of time, users can stay focused, improve productivity, and build better time-management habits.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                It encourages discipline and helps create distraction-free working or study sessions.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/SampleImage.png"
                alt="Phone lock demonstration"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features section */}
      <section className="w-full px-4 py-20 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-16 text-gray-900">
            Key Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-serif mb-4 text-gray-900">Time-Lock Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                Set custom time locks to keep your phone secured when you need to focus most. No way to unlock until the timer runs out.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-serif mb-4 text-gray-900">Simple & Intuitive</h3>
              <p className="text-gray-600 leading-relaxed">
                No complicated setup or configuration. Just lock your phone and get back to what matters.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-serif mb-4 text-gray-900">Durable Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Built to last with high-quality materials that protect your device while keeping you focused.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-serif mb-4 text-gray-900">Universal Compatibility</h3>
              <p className="text-gray-600 leading-relaxed">
                Works with all smartphone sizes and models. One solution for your entire household.
              </p>
            </div>
          </div>
        </div>
      </section>


      </div>
    </div>
  );
}