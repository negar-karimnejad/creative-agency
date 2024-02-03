import Image from "next/image";
import brandImage from "../../public/brands.png";
import heroImage from "../../public/hero.gif";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row md:text-left text-center items-center justify-between gap-8 md:gap-0 md:mt-0 mt-10">
      <div>
        <h1 className="text-5xl font-bold leading-[60px]">
          Creative
          <br />
          Thoughts
          <br />
          Agency.
        </h1>
        <p className="my-10 text-gray-300 max-w-lg">
          Lorem ipsum is a placeholder text commonly used in the printing and
          typesetting industry. It&apos;s often used as temporary text in design
          mockups and layouts.
        </p>
        <Link href={"/about"}>
          <button
            type="button"
            className="rounded-md px-3 py-2 mr-2 font-medium bg-blue-500 text-white"
          >
            Learn More
          </button>
        </Link>
        <Link href={"/contact"}>
          <button className="rounded-md px-3 py-2 font-medium bg-white text-gray-800">
            Contact
          </button>
        </Link>
        <Image
          className="grayscale mt-8 hidden md:block"
          src={brandImage}
          width={400}
          height={400}
          alt="Brand Image"
        />
      </div>
      <div>
        <Image src={heroImage} width={450} height={450} alt="Hero Image" />
      </div>
    </main>
  );
}
