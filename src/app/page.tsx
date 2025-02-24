"use client";

import Brand from "@/components/brand";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import { ContainImage, CoverImage } from "@/components/myImage";
import PryBtn from "@/components/pryBtn";
import ScrollAnimation from "@/components/scrollAnimation";
import TextInput from "@/components/textInput";
import WaitlistForm from "@/components/waitlistForm";
import { openSans } from "@/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

// Initialize GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const phoneVideoRef = useRef<HTMLDivElement>(null);
  const heroBanner = useRef<HTMLDivElement>(null);

  const newEraImageRef = useRef<HTMLDivElement>(null);
  const newEraTextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Initial hide then animate
    gsap.set([heroTextRef.current, phoneVideoRef.current, heroBanner.current], {
      opacity: 1,
      visibility: "visible",
    });

    // Hero Text Animation
    gsap.from(heroTextRef.current, {
      x: -100,
      duration: 0.4,
      ease: "power2.out",
      // delay: 0.5,
      force3D: true,
      scrollTrigger: {
        trigger: heroTextRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // Phone Video Animation
    gsap.from(phoneVideoRef.current, {
      x: 100,
      scale: 0.8,
      duration: 0.4,
      ease: "power2.out",
      // delay: 0.5,
      force3D: true,
      scrollTrigger: {
        trigger: phoneVideoRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // Hero Banner Animation
    gsap.from(heroBanner.current, {
      y: 100,
      duration: 0.4,
      force3D: true,
      ease: "power2.out",
      scrollTrigger: {
        trigger: heroBanner.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <div className="flex flex-col overflow-hidden relative">
      <Header />
      <main className="">
        {/* Hero Section */}
        <section className="flex flex-col pt-24 max-xl:pt-20 bg-[url(/pngs/heroBg.png)] max-md:bg-[url(/pngs/mobileHeroBg.png)] bg-no-repeat bg-cover max-md:bg-contain">
          {/* banner */}
          <div
            ref={heroBanner}
            className="banner py-[1.875rem] px-[19.375rem] max-3xl:px-[15rem] max-2xl:px-[10rem] max-xl:px-10 max-sm:px-5"
            style={{ visibility: "hidden", opacity: 0 }}
          >
            <div className="flex py-[0.625rem] px-[0.94rem] rounded-[0.75rem] bg-[#00f6ffde]">
              <p className="text-[1.065rem] leading-normal tracking-[-0.025rem] text-[#24304B] truncate text-center">
                <span className="font-semibold">Eagle AI Labs:</span>{" "}
                Partnership and Co-Ownership of a U.S. Regulated Crypto
                Hedgefund. This enables us to launch a new product,
                TradeDividends.{" "}
                <Link
                  className="font-semibold underline decoration-solid decoration-auto underline-offset-auto"
                  href={"#"}
                >
                  Learn More
                </Link>
              </p>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex max-md:flex-col max-md:pt-10 max-md:pb-20 items-center justify-between gap-[4.857rem] px-[19.375rem] max-3xl:px-[15rem] max-2xl:px-[10rem] max-xl:px-10 max-md:gap-[1.875rem] max-sm:px-5">
            {/* Hero Texts */}
            <div
              ref={heroTextRef}
              className="hero-text flex flex-col gap-[1.875rem] will-change-[transform,opacity]"
              style={{ opacity: 0, visibility: "hidden" }}
            >
              <div className="flex flex-col gap-[.75rem]">
                <h1 className="textGradientNeonBlue text-[4.5rem] max-lg:text-[3rem] max-lg:leading-[3.6rem]">
                  Pioneering the Future of Digital Asset Investment
                </h1>
                <p className="text-[1.125rem] text-white">
                  Eagle AI Labs is revolutionizing crypto asset management
                  through our ground-breaking partnership with a U.S.-regulated
                  crypto hedge fund. This exclusive collaboration combines our
                  advanced AI-powered BTC prediction technology with
                  institutional-grade investment expertise.
                </p>
              </div>
              <PryBtn text="Register your interest now" />
            </div>

            {/* Phone Video */}
            <div
              ref={phoneVideoRef}
              className="max-md:w-full max-md:px-0 will-change-[transform,opacity]"
              style={{ opacity: 0, visibility: "hidden" }}
            >
              <div className="max-md:hidden relative aspect-[23.61969/51.09381] w-[26.61969rem] phone-video">
                <ContainImage
                  src="/pngs/desktopPhone.png"
                  alt="Desktop Phone Video"
                />
              </div>

              <div className="hidden max-md:block relative aspect-[21.875/43.375] w-full phone-video">
                <ContainImage
                  src="/pngs/mobilePhone.png"
                  alt="Mobile Phone Video"
                />
              </div>
            </div>
          </div>
        </section>

        {/* New Era section */}
        <section className="px-[19.375rem] max-3xl:px-[15rem] max-2xl:px-[10rem] max-xl:px-10 max-sm:px-5 pt-[3.75rem] pb-20 max-md:pt-0 flex max-md:flex-col gap-[3.125rem] max-md:gap-[0.55rem] items-center">
          {/* Image */}
          <ScrollAnimation className="relative max-md:w-full" type="zoomIn">
            <div className="relative aspect-square w-[31.375rem] max-md:w-full max-md:aspect-era">
              <ContainImage
                src="/pngs/desktopEra.png"
                mobileImage="/pngs/mobileEra.png"
                alt="New Era Image"
              />
            </div>
          </ScrollAnimation>

          {/* Texts */}
          <div className="flex gap-[0.9375rem] flex-col slide-left">
            <ScrollAnimation type="slideLeft">
              <h2 className="text-[3rem] max-md:text-[2.25rem] ">
                A new era in crypto investment
              </h2>
            </ScrollAnimation>
            <ScrollAnimation type="fadeUp">
              <p className="text-[1.125rem] ">
                Our partnership represents a milestone in institutional crypto
                adoption, featuring:
              </p>
            </ScrollAnimation>
            <ScrollAnimation type="zoomIn">
              <ul
                className={`${openSans.className} text-[#8CA0B3] text-[1rem] list-disc pl-6`}
              >
                <li>
                  Exclusive licensing of Eagle AI Labs' proprietary BTC price
                  prediction algorithms
                </li>
                <li>
                  Significant equity stake in a fully regulated U.S. <br />{" "}
                  hedge fund
                </li>
                <li>
                  Management team with proven track record of managing billions
                  in AUM
                </li>
                <li>Full compliance with U.S. regulatory requirements</li>
                <li>
                  Strategic timing aligned with anticipated favourable U.S.
                  regulatory environment
                </li>
              </ul>
            </ScrollAnimation>
          </div>
        </section>

        {/* New Era section */}
        <section className="px-[19.375rem] max-3xl:px-[15rem] max-2xl:px-[10rem] max-xl:px-10 max-sm:px-5 pt-[3.75rem] pb-20 max-md:pt-0 flex max-md:flex-col-reverse gap-[3.125rem] max-md:gap-[0.75rem] items-center">
          {/* Texts */}
          <ScrollAnimation type="slideRight">
            <div className="flex gap-[0.9375rem] flex-col">
              <h2 className="text-[3rem] max-md:text-[2.25rem] ">
                Trade Dividends Rewarding our comunity
              </h2>
              <p className="text-[1.125rem] ">
                This institutional partnership enables the launch of our
                innovative TradeDividends program:
              </p>
              <ul
                className={`${openSans.className} text-[#8CA0B3] text-[1rem] list-disc pl-6`}
              >
                <li>Exclusive USDC rewards for $EAI stakers</li>
                <li>Direct benefit from institutional trading success</li>
                <li>
                  Sustainable yield generation backed by hedge fund performance
                </li>
              </ul>
            </div>
          </ScrollAnimation>

          {/* Image */}
          <ScrollAnimation className="relative max-md:w-full" type="fadeDown">
            <div className="relative aspect-square w-[31.375rem] max-md:w-full max-md:aspect-dividends">
              <ContainImage
                src="/pngs/desktopDividends.png"
                mobileImage="/pngs/mobileDividends.png"
                alt="Trade Dividends Image"
              />
            </div>
          </ScrollAnimation>
        </section>

        {/* Waitlist Section */}
        <section className="px-[19.375rem] max-3xl:px-[15rem] max-2xl:px-[10rem] max-xl:px-10 max-sm:px-5 pt-[3.75rem] pb-20 max-md:pt-0 flex flex-col gap-[1.875rem] ">
          <ScrollAnimation type="slideRight">
            <h3 className="text-[3rem] max-md:text-[2.25rem] text-[#E3E8F3]">
              Limited Availability - Register now to join wait List
            </h3>
          </ScrollAnimation>

          <div className="grid grid-cols-[1.5fr_1fr] gap-[1.875rem] max-md:grid-cols-1 max-md:gap-20">
            {/* Info */}
            <div className="flex flex-col gap-[1.875rem]">
              <ScrollAnimation type="fadeDown">
                <div className="flex items-start max-md:flex-col max-md:items-center gap-[0.94rem] p-5 rounded-[0.625rem] border border-white/20 bg-white/10">
                  <div className="relative aspect-square min-w-[6.25rem] max-lg:min-w-[5rem] max-md:min-w-[4.125rem]">
                    <ContainImage src="/pngs/key.png" alt="Key Point" />
                  </div>

                  <div className="flex flex-col gap-5 w-full">
                    <h4 className="text-[1.5rem] max-md:text-[1.125rem] max-md:text-center">
                      Limited Access Available
                    </h4>
                    <div
                      className={`${openSans.className} text-[1rem] text-[#8CA0B3] flex flex-col gap-4 `}
                    >
                      <p>
                        Be among the first to access institutional-grade crypto
                        investment opportunities. Our exclusive waitlist is now
                        open for:
                      </p>

                      <ul className="list-disc pl-5">
                        <li>Early Community Members</li>
                        <li>Active $EAI Holders</li>
                      </ul>
                      <p>🔒 Waitlist Closes: January 31, 2025</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fadeUp">
                <div className="flex items-start max-md:flex-col max-md:items-center gap-[0.94rem] p-5 rounded-[0.625rem] border border-white/20 bg-white/10">
                  <div className="relative aspect-square min-w-[6.25rem] max-lg:min-w-[5rem] max-md:min-w-[4.125rem]">
                    <ContainImage
                      src="/pngs/benefits.png"
                      alt="Benefit Point"
                    />
                  </div>

                  <div className="flex flex-col gap-5 w-full">
                    <h4 className="text-[1.5rem] max-md:text-[1.125rem] max-md:text-center">
                      Benefits of signing up early
                    </h4>
                    <div
                      className={`${openSans.className} text-[1rem] text-[#8CA0B3] flex flex-col gap-4 `}
                    >
                      <ul className="list-disc pl-5">
                        <li>Priority access when the fund launches</li>
                        <li>Early information about TradeDividends</li>
                        <li>
                          Exclusive insights from our institutional trading team
                        </li>
                        <li>Special allocation opportunities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <WaitlistForm />
          </div>
        </section>

        {/* Coming soon section */}
        <ScrollAnimation type="zoomIn">
          <section className="px-[19.375rem] max-3xl:px-[15rem] max-2xl:px-[10rem] max-xl:px-10 max-sm:px-5 pt-20 pb-[7.5rem] max-md:pb-[5rem] max-md:pt-[3.75rem] max-sm:mx-5 mb-[1.88rem] flex flex-col gap-[0.94rem] bg-[linear-gradient(115deg,#1870f6_62.27%,#32fefe_95.1%)]">
            <ScrollAnimation type="zoomIn">
              <h1 className="text-[4.5rem] max-md:text-[3rem] max-sm:text-[2.25rem]">
                Coming Q1 2025
              </h1>
            </ScrollAnimation>
            <ScrollAnimation type="fadeDown">
              <ul className="list-disc pl-8 text-[1.125rem]">
                <li>Full fund details and officer announcements</li>
                <li>TradeDividends program specifics</li>
                <li>Institutional partnership roadmap</li>
                <li>Regulatory framework overview</li>
              </ul>
            </ScrollAnimation>
          </section>
        </ScrollAnimation>
      </main>

      {/* Absolute logo in the BG */}
      <div className="absolute w-[121rem] aspect-logo right-[-42.6875rem] bottom-[5.59381rem] -z-10 opacity-10 max-md:hidden">
        <ContainImage src="/svgs/logo.svg" alt="Floating Logo" />
      </div>

      {/* Absolute logo in the BG */}
      <div className="absolute right-0 left-0 bottom-0 -z-10 opacity-60 hidden max-md:block h-[66rem]">
        <CoverImage src="/pngs/footerLine.png" alt="Footer Lines" />
      </div>
      <Footer />
    </div>
  );
}
