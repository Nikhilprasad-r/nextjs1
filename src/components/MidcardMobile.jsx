import { BsArrowRight } from "react-icons/bs";
import avatar from "../../public/avatar.jpg";

const MidcardMobile = () => {
  return (
    <div className="pt-10 px-4 sm:px-0">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:mr-16">
          <h3 className="text-xl sm:text-2xl font-medium mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <p className="text-sm sm:text-lg text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            corrupti corporis expedita sapiente debitis perferendis incidunt
            architecto aut veniam dolore.
          </p>
          <div className="flex items-center gap-2 mb-4">
            <img src={avatar} alt="" className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-xs font-medium">Author</p>
              <p className="text-xs">More about the author</p>
            </div>
          </div>
          <a
            href=""
            className="inline-flex items-center gap-1 px-4 py-2 bg-blue-500 text-white rounded-md text-sm sm:text-base hover:bg-blue-600 transition duration-200"
          >
            Learn More
            <BsArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="sm:min-w-0 sm:flex-1">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidcardMobile;
