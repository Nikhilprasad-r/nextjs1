import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
const VerticalCard = () => {
  return (
    <div class="w-full max-w-sm p-4 bg-[#f5f7fe] border border-gray-200 rounded-lg shadow sm:p-8 ">
      <div className="border-b border-gray-200">Brand</div>
      <h5 class="mb-4 text-base font-medium font-[basiersquare] ">
        Standard plan
      </h5>

      <div class="flex items-baseline text-[#002577] font-[archia] tracking-tight text-5xl/3">
        <span class="text-3xl font-semibold">+</span>
        <span class="text-5xl font-extrabold tracking-tight">49</span>
        <span class="ms-1 text-xl font-normal text-gray-500 ">%</span>
      </div>
      <p className="space-y-5 my-7">
        Xerox global training team reduced video and voiceover costs by over
        50%, compared to hiring voiceover artists in multiple languages.
      </p>

      <Link
        href="#"
        class="text-blue-700 hover:text-blue-900 flex md:order-2 items-center space-x-6 md:space-x-0 gap-2"
      >
        Choose plan <BsArrowRight />
      </Link>
    </div>
  );
};

export default VerticalCard;
