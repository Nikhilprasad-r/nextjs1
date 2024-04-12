import Image from "next/image";
import avatar from "../../public/avatar.jpg";
import { BsArrowRight } from "react-icons/bs";

const Midcard = () => {
  return (
    <div className="justify-self-center pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-[basiersquare]">
        <div className="w-full md:mr-16 mb-8 md:mb-0">
          <h3 className="font-medium text-2xl tracking-[-0.015rem] mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            quasi.
          </h3>
          <p className="text-lg font-normal text-[#2c374f] mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            corrupti corporis expedita sapiente debitis perferendis incidunt
            architecto aut veniam dolore.
          </p>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-shrink-0">
              <Image
                src={avatar}
                alt=""
                loading="lazy"
                width={40}
                height={40}
                className="inline-block rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <p className="tracking-wider uppercase text-xs font-medium">
                author
              </p>
              <p className="text-xs font-normal">more about author</p>
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

        <div className="w-full relative ">
          <div className="rounded-lg border-[1px] border-[#b7d4ff21] border-solid relative overflow-hidden">
            <div className="aspect-video">
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
  );
};

export default Midcard;
