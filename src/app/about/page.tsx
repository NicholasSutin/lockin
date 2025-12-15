// app/contact/page.tsx
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="max-w-5xl mx-auto w-full px-4 py-10 space-y-10">
        {/* Top actions */}
        <div className="flex flex-wrap gap-3">
          <Button variant="default" className="bg-emerald-400 text-black hover:bg-emerald-500">
            <Phone className="mr-2 h-4 w-4" />
            Call us!
          </Button>
          <Button variant="default" className="bg-emerald-400 text-black hover:bg-emerald-500">
            <Mail className="mr-2 h-4 w-4" />
            Email us!
          </Button>
          <Button variant="default" className="bg-emerald-400 text-black hover:bg-emerald-500">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Buy our Product!
          </Button>
        </div>

        {/* Contact hero */}
        <section className="border border-muted rounded-md p-8 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            CONTACT<br />US!
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            If you would like to learn more about the Lock In Device, have questions about how it works, 
            or want to share feedback, our team is always available to help. Reach out through our support 
            page, submit a request through the online help center, or message us on social media.
          </p>
        </section>

        {/* Message support button */}
        <div className="flex justify-center">
          <Button className="bg-emerald-400 text-black hover:bg-emerald-500 px-8 py-6 text-lg rounded-full">
            <MessageCircle className="mr-2 h-5 w-5" />
            Message a Support Agent!
          </Button>
        </div>

        <hr className="border-muted" />

        {/* Testimonials */}
        <section className="space-y-4">
          <Testimonial
            name="Maria Campbell"
            avatarSrc="/avatars/avatar1.jpg"
            quote="The Lock In Device helped me realize how much my phone was distracting me and made it so much easier to get schoolwork done on time."
          />
          <Testimonial
            name="Thomas Lindin"
            avatarSrc="/avatars/avatar2.jpg"
            quote="Super useful. I stayed focused way longer than I expected and actually finished my tasks on time for once."
          />
          <Testimonial
            name="Riley Carter"
            avatarSrc="/avatars/avatar3.jpg"
            quote="Locking my phone away finally helped me stop procrastinating. I recommend it to anyone who struggles with distractions."
          />
        </section>
      </main>

      <div className="max-w-250 mx-auto pb-5">
              <Footer />

      </div>

    </div>
  );
}

type TestimonialProps = {
  name: string;
  avatarSrc: string;
  quote: string;
};

function Testimonial({ name, avatarSrc, quote }: TestimonialProps) {
  return (
    <Card className="border border-muted rounded-md">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="h-14 w-14 overflow-hidden rounded-full bg-muted">
          <Image
            src={avatarSrc}
            alt={name}
            width={56}
            height={56}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <CardTitle className="text-base font-semibold">{name}</CardTitle>
          <div className="flex items-center gap-0.5 text-amber-400">
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{quote}</p>
      </CardContent>
    </Card>
  );
}
