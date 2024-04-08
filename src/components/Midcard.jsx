import Image from "next/image";

const Midcard = () => {
  return (
    <div className="flex flex-col justify-self-start mb-2 ">
      <div>
        <h3 className="text-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi sed
          at corrupti ipsum. Quo earum omnis dolor tempora commodi?
        </h3>
        <div className="h-1"></div>
        <p>
          Usually, our colleagues don't jump in the air when they hear
          e-learning, but the AI videos created with Synthesia have sparked
          motivation that we haven't seen before.
        </p>
        <div className="h-1"></div>
        <div className="flex">
          <Image src="./logo.svg" width={100} height={100} />
          <div>
            <div className="font-thin">name of author</div>
            <div className="font-light">more about author</div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Midcard;
