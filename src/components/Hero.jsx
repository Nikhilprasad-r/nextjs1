import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
const Hero = () => {
  return (
    <div className="text-center grid py-5">
      <div className="w-5/6 justify-self-center">
        <h2 className="text-[#084df2] text-sm font-medium mt-10">
          Video generation Platform
        </h2>
        <h1 className="my-5 text-[2.5rem] leading-[3rem] font-medium font-[archia]">
          Turn Text to videos in minutes
        </h1>
        <div className="place-content-center text-lg font-normal flex">
          <p className="max-w-xl justify-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            obcaecati Lorem adipisicing elit. Reiciendis, obcaecati Lorem
          </p>
        </div>
        <button className="text-white bg-[#084df2] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-4 py-3 text-center mt-10">
          <div className="flex md:order-2 items-center space-x-6 md:space-x-0 gap-2 ">
            Create a free AI video <BsArrowRight />
          </div>
        </button>
        <p className="text-neutral-300 text-xs mt-2">No credit card Required</p>
      </div>
      <div className="rounded-xl mt-10 w-5/6 justify-self-center">
        <video
          width="100%"
          height="100%"
          preload="none"
          autoPlay
          muted
          loop="true"
          controls={false}
        >
          <source src="./sample.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <p className="mt-10 mb-10 text-base font-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
          consectetur!
        </p>
      </div>
      <div className="grid">
        <div className="flex w-5/6 justify-self-center space-x-16 overflow-hidden">
          <div className="flex space-x-16 animate-loop-scroll">
            <Image
              className="max-w-none"
              width={100}
              height={100}
              loading="lazy"
              src="./logo.svg"
              alt="brand"
            />
            <Image
              className="max-w-none"
              width={100}
              height={100}
              loading="lazy"
              src="./logo.svg"
              alt="brand"
            />
            <Image
              className="max-w-none"
              width={100}
              height={100}
              loading="lazy"
              src="./logo.svg"
              alt="brand"
            />
            <Image
              className="max-w-none"
              width={100}
              height={100}
              loading="lazy"
              src="./logo.svg"
              alt="brand"
            />
            <Image
              className="max-w-none"
              width={100}
              height={100}
              loading="lazy"
              src="./logo.svg"
              alt="brand"
            />
            <Image
              className="max-w-none"
              width={100}
              height={100}
              loading="lazy"
              src="./logo.svg"
              alt="brand"
            />
            <Image
              className="max-w-none"
              width={100}
              height={100}
              loading="lazy"
              src="./logo.svg"
              alt="brand"
            />
          </div>
          <div
            className="flex space-x-16 animate-loop-scroll"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              width={100}
              height={100}
              loading="lazy"
              src="./logo.svg"
              alt="brand"
            />
            <Image
              className="max-w-none"
              width={100}
              height={100}
              loading="lazy"
              src="./logo.svg"
              alt="brand"
            />
            <Image
              className="max-w-none"
              width={100}
              height={100}
              loading="lazy"
              src="./logo.svg"
              alt="brand"
            />
            <Image
              className="max-w-none"
              width={100}
              height={100}
              loading="lazy"
              src="./logo.svg"
              alt="brand"
            />
            <Image
              className="max-w-none"
              width={100}
              height={100}
              loading="lazy"
              src="./logo.svg"
              alt="brand"
            />
            <Image
              className="max-w-none"
              width={100}
              height={100}
              loading="lazy"
              src="./logo.svg"
              alt="brand"
            />
            <Image
              className="max-w-none"
              width={100}
              height={100}
              loading="lazy"
              src="./logo.svg"
              alt="brand"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
