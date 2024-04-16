import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const Midcard = () => {
  return (
    <div className="justify-self-center px-4 pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-[basiersquare]">
        <div className="w-full md:mr-16 mb-8 md:mb-0">
          <h3 className="font-medium text-xl md:text-2xl tracking-[-0.015rem] mb-4">
            Replace boring text, PowerPoints and PDFs with engaging videos your
            team will love
          </h3>
          <p className="md:text-lg text-base font-normal text-[#2c374f] mb-4">
            Usually, our colleagues dont jump in the air when they hear
            e-learning, but the AI videos created with Synthesia have sparked
            motivation that we havent seen before.
          </p>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-shrink-0">
              <Image
                src=""
                alt=""
                loading="lazy"
                width={40}
                height={40}
                className="inline-block rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <p className="tracking-wider uppercase text-xs font-medium">
                JESPER B.
              </p>
              <p className="text-xs font-normal">
                Learning Specialist at BESTSELLER
              </p>
            </div>
          </div>
          <div className="flex">
            <a
              href=""
              className="flex gap-1 shadow-2xl text-black text-center leading-6 cursor-pointer bg-white rounded-md flex-nowrap justify-center items-center py-3 px-4 font-basiersquare border-[#d0d7e7] border-[1px] font-medium text-base transition duration-200"
            >
              Learn More
              <div className="w-4 h-4">
                <BsArrowRight />
              </div>
            </a>
          </div>
        </div>

        <div className="w-full aspect-video relative z-[1] border-[1px_solid_rgba(245,247,254,0.2)] p-1  rounded-xl shadow-[0_-6px_20px_rgba(11,18,32,.12)]">
          <div className="relative w-full ">
            <div className="rounded-lg border-[1px] border-[#b7d4ff21] border-solid w-full relative overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Midcard;
