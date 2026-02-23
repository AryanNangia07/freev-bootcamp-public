"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, Brain, Users, BookOpen, Target, Rocket, Trophy } from "lucide-react";

const LOGO_URL = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/11624de4-6333-4122-b504-e397f9009de7/FreeV-HS-Bootcamp-Logo-Resized-1770765612874.png?width=8000&height=8000&resize=contain";

function AnimatedSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const benefits = [
  {
    icon: Brain,
    title: "Startup Fundamentals",
    description:
      "Master design thinking, lean startup methodology, and problem validation techniques.",
  },
  {
    icon: Users,
    title: "Find Co-Founders",
    description:
      "Connect with like-minded peers and build your founding team from day one.",
  },
  {
    icon: BookOpen,
    title: "Real Case Studies",
    description:
      "Learn from successful startups and understand what makes companies succeed or fail.",
  },
  {
    icon: Target,
    title: "Expert Mentorship",
    description:
      "Get guidance from UC Berkeley students and YC-backed founders who've been there.",
  },
  {
    icon: Rocket,
    title: "Launch Your Product",
    description:
      "Go from idea to MVP - ship something real by the end of the program.",
  },
  {
    icon: Trophy,
    title: "Pitch Competition",
    description:
      "Present your startup to a panel of investors and industry experts. Win upto $10K in prizes.",
  },
];

const mentors = [
  {
    name: "Sarah Chen",
    role: "UC Berkeley CS & Business",
    bio: "Founded EdTech startup acquired in 2023. Passionate about helping young founders.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Marcus Johnson",
    role: "YC W23 Founder",
    bio: "Built a $10M ARR SaaS company. Former software engineer at Stripe.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Emily Zhang",
    role: "UC Berkeley Haas MBA",
    bio: "Led product at two unicorn startups. Angel investor in 15+ companies.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "David Park",
    role: "YC S22 Founder",
    bio: "Serial entrepreneur with 3 successful exits. Advisor at Berkeley SkyDeck.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Lisa Thompson",
    role: "UC Berkeley Engineering",
    bio: "AI researcher turned founder. Building the future of education technology.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
  },
];

const timeline = [
  {
    week: 1,
    title: "Ideation & Design Thinking",
    description: "Generate and validate startup ideas using structured brainstorming frameworks. Learn how to identify real problems worth solving.",
  },
  {
    week: 2,
    title: "Market Research",
    description: "Conduct user interviews and analyze your target audience. Map out your competitive landscape and identify your unique value proposition.",
  },
  {
    week: 3,
    title: "Business Models & Strategy",
    description: "Explore case studies to learn unit economics & pricing models. Create your own lean business canvas.",
  },
  {
    week: 4,
    title: "MVP Development",
    description: "Turn your validated idea into a minimum viable product. Learn rapid prototyping techniques, no-code tools, and how to ship fast without sacrificing quality.",
  },
  {
    week: 5,
    title: "User Testing & Iteration",
    description: "Put your MVP in front of real users and gather actionable feedback. Learn how to run effective user tests, measure key metrics, and iterate quickly.",
  },
  {
    week: 6,
    title: "Growth & Marketing",
    description: "Master customer acquisition channels and growth strategies. Dive into social media marketing, content strategy, SEO basics, and more.",
  },
  {
    week: 7,
    title: "Storytelling",
    description: "Craft a compelling narrative that resonates with investors and customers. Build your pitch deck, practice delivery, and learn how to handle Q&A.",
  },
  {
    week: 8,
    title: "Demo Day",
    description: "Present your startup to a panel of investors, founders, and industry experts. Compete for $10K in prizes and receive personalized feedback.",
  },
];

const faqs = [
  {
    question: "Who is eligible to apply?",
    answer:
      "Any high school student (ages 14-18) with a passion for entrepreneurship can apply. No prior business experience required—just curiosity and drive!",
  },
  {
    question: "Do I need coding or business experience?",
    answer:
      "Not at all! We welcome students from all backgrounds. Whether you're technical, creative, or somewhere in between, you'll find your place here.",
  },
  {
    question: "What's the time commitment?",
    answer:
      "The bootcamp runs for 8 weeks with 1-2 hours of live sessions per week, plus optional office hours. Most students spend 4-6 hours total per week.",
  },
  {
    question: "What is the pricing of the bootcamp?",
    answer:
      "The full cost of the bootcamp is $250. Free Ventures is committed to accessible education and offers financial aid to students with verified need. If cost may be a barrier or you are unsure whether you qualify, we encourage you to reach out to aryan@freeventures.org .",
  },
  {
    question: "Can I apply if I already have a startup idea?",
    answer:
      "Absolutely! Whether you come with an idea or want to discover one during the program, we'll help you develop and validate it.",
  },
];

// Toggle this to show/hide the "Meet Your Mentors" section
const SHOW_MENTORS_SECTION = false;

export default function Home() {
    return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Image
              src={LOGO_URL}
              alt="Free Ventures"
              width={200}
              height={56}
              className="h-14 w-auto"
            />
            <a
              href="https://tinyurl.com/freevbootcamp26"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-purple-700 transition-all"
            >
              Apply Now
            </a>
        </div>
      </header>

      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-16 md:px-12 lg:px-24">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-white to-violet-50/50" />
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col lg:flex-row lg:items-center lg:gap-16"
          >
            <div className="flex-1 mb-12 lg:mb-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <Image
                  src={LOGO_URL}
                  alt="Free Ventures"
                  width={200}
                  height={50}
                  className="h-10 w-auto lg:hidden"
                />
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
                High School
                <br />
                Entrepreneurship
                <br />
                <span className="text-purple-600">Bootcamp</span>
              </h1>
                <p className="text-xl md:text-2xl text-gray-600 font-light mb-10 max-w-lg">
                  Empowering young builders. Hosted by the leading startup accelerator at UC Berkeley, <a href="https://freeventures.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">Free Ventures</a>.
                </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                    href="https://tinyurl.com/freevbootcamp26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-purple-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex-1 relative"
            >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/10">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/11624de4-6333-4122-b504-e397f9009de7/Berkeley-Photo-1770765757591.jpg?width=8000&height=8000&resize=contain"
                    alt="UC Berkeley campus"
                    fill
                    className="object-cover"
                    priority
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl hidden md:block">
                <p className="text-3xl font-bold text-purple-600">500+</p>
                <p className="text-gray-500 text-sm">Students Launched</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="text-purple-600 font-medium tracking-wide text-sm mb-3 text-center">
              PROGRAM BENEFITS
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
              What You&apos;ll Gain
            </h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16 text-lg">
              Everything you need to go from idea to launch in 8 weeks (March - April)
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                  <div className="group p-8 rounded-3xl bg-purple-50/50 hover:bg-purple-100/50 transition-all duration-300 h-full border border-purple-100 hover:border-purple-200">
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                      <benefit.icon className="w-6 h-6 text-purple-600" />
                    </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

        {SHOW_MENTORS_SECTION && (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-purple-50/50 to-white">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <p className="text-purple-600 font-medium tracking-wide text-sm mb-3 text-center">
                YOUR GUIDES
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
                Meet Your Mentors
              </h2>
              <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16 text-lg">
                Learn from founders and students who&apos;ve walked the path
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative px-4 md:px-16">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {mentors.map((mentor) => (
                      <CarouselItem
                        key={mentor.name}
                        className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                      >
                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-purple-100 h-full">
                          <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6">
                            <Image
                              src={mentor.image}
                              alt={mentor.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {mentor.name}
                          </h3>
                          <p className="text-purple-600 font-medium text-sm mb-3">
                            {mentor.role}
                          </p>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {mentor.bio}
                          </p>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-2 md:-left-12 bg-white border-purple-200 hover:bg-purple-50" />
                  <CarouselNext className="-right-2 md:-right-12 bg-white border-purple-200 hover:bg-purple-50" />
                </Carousel>
              </div>
            </AnimatedSection>
          </div>
        </section>
        )}

        <section className="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <p className="text-purple-600 font-medium tracking-wide text-sm mb-3 text-center">
                  INDUSTRY LEADERS
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
                  Mentors From
                </h2>
                <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16 text-lg">
                  Learn from professionals at the world&apos;s most innovative companies
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
                  <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
                  <div className="flex animate-scroll">
                      {[...Array(4)].map((_, setIndex) => (
                          <div key={setIndex} className="flex shrink-0 items-center gap-16 px-8">
                            <div className="flex items-center justify-center h-12 shrink-0">
                              <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/11624de4-6333-4122-b504-e397f9009de7/Y-Combinator-Logo-resized-1770407875828.webp?width=8000&height=8000&resize=contain" alt="Y Combinator" className="h-10 w-auto object-contain" />
                            </div>
                            <div className="flex items-center justify-center h-12 shrink-0">
                              <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/11624de4-6333-4122-b504-e397f9009de7/McKinsey-logo-1770407875704.png?width=8000&height=8000&resize=contain" alt="McKinsey" className="h-10 w-auto object-contain" />
                            </div>
                              <div className="flex items-center justify-center h-12 shrink-0">
                                <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/11624de4-6333-4122-b504-e397f9009de7/Google-loog-1770407875705.png?width=8000&height=8000&resize=contain" alt="Google" className="h-10 w-auto object-contain" />
                              </div>
                            <div className="flex items-center justify-center h-12 shrink-0">
                              <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/11624de4-6333-4122-b504-e397f9009de7/Amazon-logo-resized-1770765063177.webp?width=8000&height=8000&resize=contain" alt="Amazon" className="h-10 w-auto object-contain" />
                            </div>
                            <div className="flex items-center justify-center h-12 shrink-0">
                              <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/11624de4-6333-4122-b504-e397f9009de7/OpenAI-logo-resized-1770765063177.webp?width=8000&height=8000&resize=contain" alt="OpenAI" className="h-10 w-auto object-contain" />
                            </div>
                              <div className="flex items-center justify-center h-12 shrink-0">
                                <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/11624de4-6333-4122-b504-e397f9009de7/Stripe-logo-1770765063206.png?width=8000&height=8000&resize=contain" alt="Stripe" className="h-10 w-auto object-contain" />
                              </div>
                              <div className="flex items-center justify-center h-12 shrink-0">
                                <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/11624de4-6333-4122-b504-e397f9009de7/Apple-logo-png-resized-1770765341497.webp?width=8000&height=8000&resize=contain" alt="Apple" className="h-10 w-auto object-contain" />
                              </div>
                              <div className="flex items-center justify-center h-12 shrink-0">
                                <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/11624de4-6333-4122-b504-e397f9009de7/Jane_Street-Logo-1770765341012.png?width=8000&height=8000&resize=contain" alt="Jane Street" className="h-10 w-auto object-contain" />
                              </div>
                            </div>
                      ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

        <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <p className="text-purple-600 font-medium tracking-wide text-sm mb-3 text-center">
                THE JOURNEY
              </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
              8-Week Timeline
            </h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16 text-lg">
              From first idea to final pitch
            </p>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-200 via-purple-400 to-purple-600 md:-translate-x-px" />
            {timeline.map((item, index) => (
              <AnimatedSection key={item.week} delay={index * 0.1}>
                <div
                  className={`relative flex items-start gap-6 md:gap-0 mb-12 last:mb-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-purple-500 rounded-full md:-translate-x-1.5 translate-y-2 ring-4 ring-purple-100" />
                  <div
                    className={`flex-1 pl-12 md:pl-0 ${
                      index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <span className="inline-block text-purple-600 font-bold text-sm mb-2">
                      WEEK {item.week}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="hidden md:block flex-1" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-purple-50/50">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="text-purple-600 font-medium tracking-wide text-sm mb-3 text-center">
              QUESTIONS
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
              Frequently Asked
            </h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 text-lg">
              Everything you need to know before applying
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-white rounded-2xl px-6 border-none shadow-sm"
                >
                  <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      <section
        id="apply"
        className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-purple-900 via-purple-800 to-violet-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Join the next generation
              <br />
              of entrepreneurs
            </h2>
            <p className="text-purple-200 text-lg mb-10 max-w-xl mx-auto">
              Applications are reviewed on a rolling basis. The sooner you
              apply, the sooner you can start building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://tinyurl.com/freevbootcamp26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-purple-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </a>
              <a
                href="mailto:aryan@freeventures.org"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-full font-medium text-lg border border-purple-400/50 hover:border-purple-300 hover:bg-white/5 transition-all"
              >
                Questions? Contact Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <footer className="py-8 px-6 bg-purple-950 border-t border-purple-900">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
            <Image
              src={LOGO_URL}
              alt="Free Ventures"
              width={200}
              height={56}
              className="h-14 w-auto brightness-0 invert opacity-80"
            />
          <p className="text-purple-300/60 text-sm">
            © 2026 Free Ventures. Empowering the next generation of builders.
          </p>
        </div>
      </footer>
    </main>
  );
}
