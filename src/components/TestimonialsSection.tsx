
"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, EduLearn",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "HelloSync has transformed how we build collaborative features in our learning platform. The real-time document editing has made our virtual classrooms feel truly interactive."
  },
  {
    name: "Michael Chen",
    role: "Product Manager, TaskFlow",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "Implementing HelloSync's whiteboarding feature into our productivity suite was seamless. Our users love the collaborative experience, and our development team saved months of work."
  },
  {
    name: "Emily Zhang",
    role: "Lead Developer, DesignHub",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "The reliability of HelloSync's infrastructure is impressive. We've seen a 40% increase in user engagement since implementing their real-time collaboration features in our design tool."
  },
  {
    name: "David Wilson",
    role: "Founder, CollabSpace",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "We built our entire collaboration platform on HelloSync and couldn't be happier. Their API is intuitive, and the performance even with hundreds of concurrent users is rock-solid."
  },
  {
    name: "Lisa Thompson",
    role: "Engineering Director, WorkTogether",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "HelloSync's attention to security while maintaining excellent real-time performance gave us confidence to use them for our enterprise clients. The implementation was straightforward."
  },
  {
    name: "James Rodriguez",
    role: "UX Designer, CreativeFlow",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: "As a design-focused company, the ability to customize HelloSync's collaborative features to match our brand was crucial. Our users can't tell where our app ends and HelloSync begins."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">Trusted by Innovators</h2>
          <p className="text-muted-foreground text-lg">
            See how teams are building better collaborative experiences with HelloSync
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
