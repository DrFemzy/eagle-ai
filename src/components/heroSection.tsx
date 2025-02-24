import React, { useEffect } from "react";
import PryBtn from "./pryBtn";
import { ContainImage } from "./myImage";
import Link from "next/link";
import gsap from "gsap";
import { useRef } from "react";


function HeroSection() {
  return (
    <section className="flex flex-col pt-24 max-xl:pt-20 bg-[url(/pngs/heroBg.png)] max-md:bg-[url(/pngs/mobileHeroBg.png)] bg-no-repeat bg-cover max-md:bg-contain">
      {/* banner */}
      <div className="banner py-[1.875rem] px-[19.375rem] max-3xl:px-[15rem] max-2xl:px-[10rem] max-xl:px-10 max-sm:px-5">
        <div className="flex py-[0.625rem] px-[0.94rem] rounded-[0.75rem] bg-[#00f6ffde]">
          <p className="text-[1.065rem] leading-normal tracking-[-0.025rem] text-[#24304B] truncate text-center">
            <span className="font-semibold">Eagle AI Labs:</span> Partnership
            and Co-Ownership of a U.S. Regulated Crypto Hedgefund. This enables
            us to launch a new product, TradeDividends.{" "}
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
        <div className="hero-text flex flex-col gap-[1.875rem]">
          <div className="flex flex-col gap-[.75rem]">
            <h1 className="textGradientNeonBlue text-[4.5rem] max-lg:text-[3rem] max-lg:leading-[3.6rem] ">
              Pioneering the Future of Digital Asset Investment
            </h1>
            <p className="text-[1.125rem] text-white">
              Eagle AI Labs is revolutionizing crypto asset management through
              our ground-breaking partnership with a U.S.-regulated crypto hedge
              fund. This exclusive collaboration combines our advanced
              AI-powered BTC prediction technology with institutional-grade
              investment expertise.
            </p>
          </div>
          <PryBtn text="Register your interest now" />
        </div>

        {/* Phone Video */}
        <div className="max-md:w-full max-md:px-0">
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
  );
}

export default HeroSection;
