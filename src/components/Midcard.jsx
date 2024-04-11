import Image from "next/image";

const Midcard = () => {
  return (
    <div className="justify-self-center pt-10">
      <div className="flex font-[basiersquare]">
        <div className="w-80">
          <h3 className="font-medium text-2xl tracking-[-0.015rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            quasi.
          </h3>
          <p className="text-lg font-normal text-[#2c374f]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            corrupti corporis expedita sapiente debitis perferendis incidunt
            architecto aut veniam dolore.
          </p>
          <div className="flex">
            <div className="flex gap-4 items-center rounded-full align-middle">
              <Image
                src={""}
                alt=""
                loading="lazy"
                width={"2.6rem"}
                height={"2.6rem"}
                className="inline-block"
              />
            </div>
            <div className="flex flex-col w-full">
              <p className="tracking-wider uppercase text-xs font-medium ">
                author
              </p>
              <p className="text-xs font-normal">more about author</p>
            </div>
          </div>
          <div className="">Learn More</div>
        </div>
        <div className="z-1 min-w-full max-w-full relative shadow-[0 -6px 20px rgba(11,18,32,1.2)] rounded-2xl backdrop-blur-[.25rem] bg-[rgba(255, 255, 255, 0.3)] border-1 border-[rgba(245, 247, 254, 0.2)] border-solid ">
          <div className="rounded-lg border-1 border-[rgba(183, 212, 255, .13)] border-solid relative overflow-hidden">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <video></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Midcard;
