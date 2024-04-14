import AccordionItem from "./AccordianItem";

const Accordion = () => {
  return (
    <section className="w-full max-w-[70rem] md:w-5/6 relative justify-self-center pt-10 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-8 md:mb-[60px] md:max-w-[520px] lg:mb-20">
              <p className="text-[#084df2] md:text-sm text-xs  font-medium mb-2 font-[basiersquare] tracking-wider uppercase">
                FAQ
              </p>
              <h2 className="text-3xl font-[archia] tracking-tight font-medium">
                Frequently asked questions about AI video
              </h2>
            </div>
          </div>
        </div>

        <div className="md:-mx-4 flex flex-wrap">
          <div className="w-full px-4 ">
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
