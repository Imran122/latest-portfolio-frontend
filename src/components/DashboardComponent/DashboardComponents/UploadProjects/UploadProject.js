import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Image from "next/image";
import { useState } from "react";
import imageuser from "../../../../assets/images/dashboard/userIcon.png";

const UploadProject = () => {
  const [editorData, setEditorData] = useState("");

  const editorConfig = {
    // Your CKEditor configuration options go here
  };
  return (
    <div className="px-5 mx-8 my-4 bg-white mb-6 py-2s">
      <form className="">
        <h2 className="text-center text-2xl font-custom_subtitle_font font-black uppercase">
          Upload Project Details
        </h2>
        <div className="grid lg:grid-cols-2 gap-4 items-center w-full ">
          <div className="lg:col-span-1 flex flex-col mb-4 p-4 border">
            <label htmlFor="model" className="font-medium">
              TITLE<span className="text-red-600">**</span>
            </label>
            <input
              type="text"
              id="model"
              placeholder="Enter Title"
              className="mt-4 font-medium focus:border-blue border-2 border-text_colour"
            />
          </div>
          <div className="lg:col-span-1 flex flex-col mb-4 p-4 border">
            <label htmlFor="model" className="font-medium">
              SELECT CATEGOREY<span className="text-red-600">**</span>
            </label>

            <select id="cars" className="w-full h-10 bg-white">
              <option className="w-full" value="volvo">
                Volvo
              </option>
              <option className="w-full" value="saab">
                Saab
              </option>
              <option className="w-full" value="vw">
                VW
              </option>
            </select>
          </div>
        </div>

        {/*   image 1 with text write desing */}
        <div className="border ">
          <div className="mb-4 p-4 ">
            <label htmlFor="model" className="font-medium">
              Upload Image 1<span className="text-red-600">**</span>
            </label>
            <div className="flex flex-row justify-center items-center mt-4">
              <Image className=" w-20 h-20" src={imageuser} alt="image"></Image>
              <input
                type="file"
                name="newsImage"
                accept="image/*"
                className="ml-2 p-1 w-full text-slate-500 text-sm rounded-full leading-6 file:bg-violet-200 file:text-violet-700 file:font-semibold file:border-none file:px-4 file:py-1 file:mr-6 file:rounded-full hover:file:bg-violet-100 border border-gray-300"
              />
            </div>
          </div>
          <div className="h-64">
            <CKEditor
              editor={ClassicEditor}
              config={editorConfig}
              data={editorData}
              className="h-64"
            />
          </div>
        </div>
        {/*   image 2 with text write desing */}
        <div className="border mt-8">
          <div className="mb-4 p-4 ">
            <label htmlFor="model" className="font-medium">
              Upload Image 2<span className="text-red-600">**</span>
            </label>
            <div className="flex flex-row justify-center items-center mt-4">
              <Image className=" w-20 h-20" src={imageuser} alt="image"></Image>
              <input
                type="file"
                name="newsImage"
                accept="image/*"
                className="ml-2 p-1 w-full text-slate-500 text-sm rounded-full leading-6 file:bg-violet-200 file:text-violet-700 file:font-semibold file:border-none file:px-4 file:py-1 file:mr-6 file:rounded-full hover:file:bg-violet-100 border border-gray-300"
              />
            </div>
          </div>
          <div className="h-64">
            <CKEditor
              editor={ClassicEditor}
              config={editorConfig}
              data={editorData}
              className="h-64"
            />
          </div>
        </div>
        {/*   image 3 with text write desing */}
        <div className="border mt-6">
          <div className="mb-4 p-4 ">
            <label htmlFor="model" className="font-medium">
              Upload Image 3<span className="text-red-600">**</span>
            </label>
            <div className="flex flex-row justify-center items-center mt-4">
              <Image className=" w-20 h-20" src={imageuser} alt="image"></Image>
              <input
                type="file"
                name="newsImage"
                accept="image/*"
                className="ml-2 p-1 w-full text-slate-500 text-sm rounded-full leading-6 file:bg-violet-200 file:text-violet-700 file:font-semibold file:border-none file:px-4 file:py-1 file:mr-6 file:rounded-full hover:file:bg-violet-100 border border-gray-300"
              />
            </div>
          </div>
          <div className="h-64">
            <CKEditor
              editor={ClassicEditor}
              config={editorConfig}
              data={editorData}
              className="h-64"
            />
          </div>
        </div>

        <div className="w-full px-3  mt-11">
          <button className="w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadProject;
