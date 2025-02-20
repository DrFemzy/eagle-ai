import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="">
        {/* Hero Section */}
        <section className="flex flex-col"></section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
