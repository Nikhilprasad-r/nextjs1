import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
const Hero = () => {
  return (
    <div className="text-center ">
      <div>
        <h2 className="text-blue-900  mt-10">Video generation Platform</h2>
        <h1 className="my-5 text-2xl font-bold">
          Turn Text to videos in minutes
        </h1>
        <p className="text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          obcaecati Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Adipisci, harum.
        </p>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mt-10">
          <div className="flex md:order-2 items-center space-x-6 md:space-x-0 gap-2">
            Create a free AI video <BsArrowRight />
          </div>
        </button>
        <p className="text-neutral-300 text-xs mt-2">No credit card Required</p>
      </div>
      <iframe
        src="https://www.youtube.com/watch?v=gfU1iZnjRZM"
        frameborder="0"
        allowfullscreen
        width={"100%"}
        height={"100%"}
        className="rounded-lg"
      />
      <div>
        <p className="mt-10 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
          consectetur!
        </p>
      </div>
      <div className="flex space-x-16 overflow-hidden">
        <div className="flex space-x-16 animate-loop-scroll">
          <Image
            className="max-w-none"
            width={100}
            height={100}
            loading="lazy"
            src="./logo.svg"
          />
          <Image
            className="max-w-none"
            width={100}
            height={100}
            loading="lazy"
            src="./logo.svg"
          />
          <Image
            className="max-w-none"
            width={100}
            height={100}
            loading="lazy"
            src="./logo.svg"
          />
          <Image
            className="max-w-none"
            width={100}
            height={100}
            loading="lazy"
            src="./logo.svg"
          />
          <Image
            className="max-w-none"
            width={100}
            height={100}
            loading="lazy"
            src="./logo.svg"
          />
          <Image
            className="max-w-none"
            width={100}
            height={100}
            loading="lazy"
            src="./logo.svg"
          />
          <Image
            className="max-w-none"
            width={100}
            height={100}
            loading="lazy"
            src="./logo.svg"
          />
        </div>
        <div className="flex space-x-16 animate-loop-scroll" aria-hidden="true">
          <Image
            className="max-w-none"
            width={100}
            height={100}
            loading="lazy"
            src="./logo.svg"
          />
          <Image
            className="max-w-none"
            width={100}
            height={100}
            loading="lazy"
            src="./logo.svg"
          />
          <Image
            className="max-w-none"
            width={100}
            height={100}
            loading="lazy"
            src="./logo.svg"
          />
          <Image
            className="max-w-none"
            width={100}
            height={100}
            loading="lazy"
            src="./logo.svg"
          />
          <Image
            className="max-w-none"
            width={100}
            height={100}
            loading="lazy"
            src="./logo.svg"
          />
          <Image
            className="max-w-none"
            width={100}
            height={100}
            loading="lazy"
            src="./logo.svg"
          />
          <Image
            className="max-w-none"
            width={100}
            height={100}
            loading="lazy"
            src="./logo.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
