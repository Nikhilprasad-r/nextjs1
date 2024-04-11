import Image from "next/image";
import Midcard from "./Midcard";

const Usercase = () => {
  return (
    <section className="relative">
      <div className="block px-10">
        <div className="py-0 px-24">
          <div className="w-full max-w-6xl relative">
            <div className="w-full max-w-6xl relative">
              <div className="mb-12">
                <div className="flex items-center flex-col text-center">
                  <div className="mb-6">
                    <div className="mb-2">
                      <div className="tracking-tighter uppercase font-[basiersquare] text-sm font-medium text-[#084df2] ">
                        Use cases
                      </div>
                    </div>
                    <h2 className="text-4xl font-[archia] tracking-tight font-medium">
                      For teams who create training videos at scale
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Midcard />
      </div>
    </section>
  );
};

export default Usercase;
