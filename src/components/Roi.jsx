import VerticalCard from "./VerticalCard";

const Roi = () => {
  return (
    <section className="w-5/6 relative justify-self-center pt-10 pb-24">
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
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
      </div>
    </section>
  );
};

export default Roi;
