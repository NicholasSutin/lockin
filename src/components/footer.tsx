// src/components/Footer.tsx
import Image from 'next/image';
import gradient from '@/assets/gradient.avif';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
<footer className="w-full mt-20">
  <div className="relative w-full rounded-xl overflow-hidden bg-accent-foreground text-accent">
    <div className="absolute inset-0 h-full">
      <Image
        src={gradient}
        alt=""
        fill
        priority
        className="object-cover"
      />
    </div>

    {/* Content */}
    <div className="relative z-10">

   <div className="px-6 py-8 grid grid-cols-[2fr_1fr_1fr] gap-x-8 mt-50 bg-black/40 backdrop-blur-md rounded-xl">
            <div>
                <h1 className="font-switzer text-xl mb-3">Be Better</h1>
                
            </div>
            <div>
                <h1 className="text-xl mb-3">Shop</h1>
                
            </div>
            <div>
                <h1 className="text-xl mb-3">Company</h1>
            </div>

            <div>
                <p className="text-accent/80 py-2">With Block, your phone doesn't just get a time limit - Its schedule transforms to guide your habits</p>
            </div>
            <div>
                <Button variant="link" className="text-accent/80 text-md p-0 hover:cursor-pointer">
                    <Link href="#" className="py-2">Block</Link>
                </Button>
            </div>
            <div>
                <Button variant="link" className="text-accent/80 text-md p-0 hover:cursor-pointer">
                    <Link href="#" className="py-2">About Us</Link>
                </Button>
            </div>

        </div>

    </div>
  </div>
</footer>

  );
}
