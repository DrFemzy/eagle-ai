"use client";

import Header from "@/components/header";
import { ContainImage, CoverImage } from "@/components/myImage";
import PryBtn from "@/components/pryBtn";
import { openSans } from "@/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="">
        {/* Hero Section */}
        <section className="flex flex-col pt-24 xl:pt-20 bg-heroBg md:bg-mobileHeroBg bg-no-repeat bg-cover md:bg-contain">
          {/* banner */}
          <div className="py-[1.875rem] px-[19.375rem] 3xl:px-[15rem] 2xl:px-[10rem] xl:px-10 sm:px-5">
            <div className="flex py-[0.625rem] px-[0.94rem] rounded-[0.75rem] bg-eagleHighlight">
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
          <div className="flex md:flex-col md:pt-10 md:pb-20 items-center justify-between gap-[1.857rem] px-[19.375rem] 3xl:px-[15rem] 2xl:px-[10rem] xl:px-10 sm:px-5">
            {/* Hero Texts */}
            <div className="flex flex-col gap-[1.875rem]">
              <div className="flex flex-col gap-[.75rem]">
                <h1 className="textGradientNeonBlue text-[4.5rem] lg:text-[3rem] lg:leading-[3.6rem] ">
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
            <div className="px-[2.97rem] md:w-full md:px-0">
              <div className="md:hidden relative aspect-desktopPhone w-[26.61969rem]">
                <ContainImage
                  src="/pngs/desktopPhone.png"
                  alt="Desktop Phone Video"
                />
              </div>

              <div className="hidden md:block relative aspect-mobilePhone w-full">
                <ContainImage
                  src="/pngs/mobilePhone.png"
                  alt="Mobile Phone Video"
                />
              </div>
            </div>
          </div>
        </section>

        {/* New Era section */}
        <section className="px-[19.375rem] 3xl:px-[15rem] 2xl:px-[10rem] xl:px-10 sm:px-5 pt-[3.75rem] pb-20 md:pt-0 flex md:flex-col gap-[3.125rem] md:gap-[0.55rem] items-center">
          {/* Image */}
          <div className="relative aspect-square w-[31.375rem] md:w-full md:aspect-era">
            <ContainImage
              src="/pngs/desktopEra.png"
              mobileImage="/pngs/mobileEra.png"
              alt="New Era Image"
            />
          </div>

          {/* Texts */}
          <div className="flex gap-[0.9375rem] flex-col">
            <h2 className="text-[3rem] md:text-[2.25rem] ">
              A new era in crypto investment
            </h2>
            <p className="text-[1.125rem] ">
              Our partnership represents a milestone in institutional crypto
              adoption, featuring:
            </p>
            <ul
              className={`${openSans.className} text-[#8CA0B3] text-[1rem] list-disc pl-6`}
            >
              <li>
                Exclusive licensing of Eagle AI Labs' proprietary BTC price
                prediction algorithms
              </li>
              <li>
                Significant equity stake in a fully regulated U.S. <br /> hedge
                fund
              </li>
              <li>
                Management team with proven track record of managing billions in
                AUM
              </li>
              <li>Full compliance with U.S. regulatory requirements</li>
              <li>
                Strategic timing aligned with anticipated favourable U.S.
                regulatory environment
              </li>
            </ul>
          </div>
        </section>

        {/* New Era section */}
        <section className="px-[19.375rem] 3xl:px-[15rem] 2xl:px-[10rem] xl:px-10 sm:px-5 pt-[3.75rem] pb-20 md:pt-0 flex md:flex-col-reverse gap-[3.125rem] md:gap-[0.75rem] items-center">
          {/* Texts */}
          <div className="flex gap-[0.9375rem] flex-col">
            <h2 className="text-[3rem] md:text-[2.25rem] ">
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

          {/* Image */}
          <div className="relative aspect-square w-[31.375rem] md:w-full md:aspect-dividends">
            <ContainImage
              src="/pngs/desktopDividends.png"
              mobileImage="/pngs/mobileDividends.png"
              alt="Trade Dividends Image"
            />
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
