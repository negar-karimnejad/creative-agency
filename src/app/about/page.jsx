import Image from "next/image";
import aboutImage from "../../../public/about.png";

function About() {
  return (
    <main className="flex flex-col md:flex-row md:text-left text-center items-center justify-between gap-8 md:gap-0 md:mt-0 mt-10">
      <div>
        <h6 className="font-bold text-blue-600 mb-10">About Agency</h6>
        <h1 className="text-4xl font-bold leading-[45px]">
          We create digital ideas
          <br /> that are bigger, bolder,
          <br /> braver and better.
        </h1>
        <p className="my-10 text-gray-300 max-w-lg">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className="items-center justify-between gap-5 md:flex hidden">
          <div className="">
            <h1 className="text-blue-600 font-bold text-2xl">10 K+</h1>
            <p className="text-sm text-gray-300">Year of experience</p>
          </div>
          <div className="">
            <h1 className="text-blue-600 font-bold text-2xl">234 K+</h1>
            <p className="text-sm text-gray-300">People reached</p>
          </div>
          <div className="">
            <h1 className="text-blue-600 font-bold text-2xl">5 K+</h1>
            <p className="text-sm text-gray-300">Services and plugins</p>
          </div>
        </div>
      </div>
      <div>
        <Image src={aboutImage} width={400} height={400} alt="About Image" />
      </div>
    </main>
  );
}

export default About;
