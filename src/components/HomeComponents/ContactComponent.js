import { SiGooglemessages } from "react-icons/si";
const ContactComponent = () => {
  return (
    <div id="contact">
      {/*  service button */}
      <div className="middle-body-buton mt-28">
        <SiGooglemessages />
        <h4>CONTACT</h4>
      </div>

      <div className="mt-16 mb-4 border border-text_colour p-4 rounded-2xl shadow-md">
        <h3 className="middle-body-title mb-8">
          Let`s Work <span className="text-primary_colour">Together !</span>
        </h3>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="  flex flex-col mb-4 bg-none ">
            <label
              htmlFor="model"
              className="font-medium mb-2 text-text_colour"
            >
              Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Name..."
              className="p-4 rounded-lg font-medium border  bg-[#212529] border-gray-200 focus:ring-primary_colour focus:ring focus:text-white "
            />
          </div>
          <div className="  flex flex-col mb-4 bg-none">
            <label
              htmlFor="model"
              className="font-medium mb-2 text-text_colour"
            >
              Email<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter Email..."
              className="p-4 rounded-lg font-medium border bg-[#212529] border-gray-200 focus:ring-primary_colour focus:ring focus:text-white "
            />
          </div>
        </div>
        <div className="  flex flex-col mb-4 bg-none">
          <label htmlFor="model" className="font-medium mb-2 text-text_colour">
            Subject<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter subject..."
            className="p-4 rounded-lg font-medium border bg-[#212529] border-gray-200 focus:ring-primary_colour focus:ring focus:text-white "
          />
        </div>
        <div className="  flex flex-col mb-4 bg-none">
          <label htmlFor="model" className="font-medium mb-2 text-text_colour">
            Text<span className="text-red-600">*</span>
          </label>
          <textarea
            type="text"
            placeholder="Enter Text..."
            className="p-4 rounded-lg font-medium border bg-[#212529] border-gray-200 focus:ring-primary_colour focus:ring focus:text-white "
          />
        </div>

        <button className="mt-4 mb-4  group relative p-4 overflow-hidden rounded-3xl bg-white text-xl shadow w-full focus:outline-none">
          <div className="absolute inset-0 w-3 bg-primary_colour transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white text-center">
            SUBMIT
          </span>
          {/* Outline Effect */}
          <div className="absolute inset-0 rounded-3xl border-2 border-primary_colour pointer-events-none"></div>
        </button>
      </div>
    </div>
  );
};

export default ContactComponent;
