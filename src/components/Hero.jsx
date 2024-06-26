import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="text-center px-4 md:px-0 mx-auto">
      <div className="h-16"></div>
      <div className="">
        <div className="text-left md:text-center">
          <h2 className="text-[#084df2] text-xs md:text-sm font-medium mb-2 font-[basiersquare] uppercase">
            #1 AI VIDEO GENERATION PLATFORM
          </h2>
          <h1 className="mb-4 text-3xl md:text-4xl leading-[3rem] md:leading-[4rem] font-medium font-[archia]">
            Turn Text to videos in minutes
          </h1>
          <div className="md:place-content-center text-base md:text-lg font-normal  flex">
            <p className="max-w-xl justify-center font-[basiersquare] text-[#2c374f]">
              Create studio-quality videos with AI avatars and voiceovers in
              130+ languages. It s as easy as making a slide deck.
            </p>
          </div>
        </div>
        <button className="text-white bg-[#084df2] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base md:px-4 md:inline flex py-3 w-full md:w-auto text-center justify-center items-center mt-10">
          <div className="flex md:order-2 items-center space-x-6 md:space-x-0 gap-2 ">
            Create a free AI video <BsArrowRight />
          </div>
        </button>
        <p className="text-neutral-300 text-xs mt-2">No credit card Required</p>
      </div>
      <div className="rounded-xl mt-8 md:mt-16 max-w-[70rem] justify-self-center">
        <video
          width="100%"
          height="100%"
          preload="none"
          autoPlay
          muted
          loop
          controls={false}
        >
          <source src="./sample.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <p className="mt-10 mb-10 text-sm md:text-base font-[basiersquare] text-[#6e778c] font-normal">
          Trusted by over 50,000 companies
        </p>
      </div>
      <div className="grid">
        <div className="flex w-full max-w-[70rem] mb-[1rem] py-2 md:w-5/6 justify-self-center space-x-16 md:space-x-4 h-8 overflow-hidden">
          <div className="flex space-x-16 md:space-x-4 animate-loop-scroll">
            {[...Array(7)].map((_, index) => (
              <Image
                key={index}
                className="max-w-none"
                width={100}
                height={100}
                loading="lazy"
                src="./logo.svg"
                alt="brand"
              />
            ))}
          </div>
          <div
            className="flex space-x-16 md:space-x-4 animate-loop-scroll"
            aria-hidden="true"
          >
            {[...Array(7)].map((_, index) => (
              <Image
                key={index}
                className="max-w-none"
                width={100}
                height={100}
                loading="lazy"
                src="./logo.svg"
                alt="brand"
              />
            ))}
          </div>
        </div>
      </div>
      <hr className="my-12 h-0.5 border-t-2 dark:bg-white/10" />
    </div>
  );
};

export default Hero;
