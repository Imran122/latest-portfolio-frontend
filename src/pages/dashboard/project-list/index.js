import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const index = () => {
  return (
    <div className="p-8 mt-4 bg-[#EFF2F5]">
      <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 overflow-x-auto">
        <div className="align-middle inline-block w-full shadow  sm:rounded-lg border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-white leading-4 tracking-wider text-base text-gray-900">
                <th className="px-6 py-5 text-left" colspan="7">
                  <input
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    type="checkbox"
                  />
                </th>
                <th className="px-6 py-5 text-left">PROJECT LIST</th>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                <th className="px-6 py-3 text-left font-medium">
                  <input
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    type="checkbox"
                  />
                </th>
                <th className="px-6 py-3 text-left font-medium">Title</th>
                <th className="px-6 py-3 text-left font-medium">Author</th>
                <th className="px-6 py-3 text-left font-medium">Image</th>
                <th className="px-6 py-3 text-left font-medium">Created</th>
                <th className="px-6 py-3 text-left font-medium">Status</th>
                <th className="px-6 py-3 text-left font-medium">Action</th>
                <th className="px-6 py-3 text-left font-medium"></th>
              </tr>
            </thead>

            <tbody className="bg-white">
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <input
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    type="checkbox"
                  />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">hgjgh</div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">hgjgh</div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://via.placeholder.com/400x400"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm leading-5 font-medium text-gray-900"></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">hjhgj</div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    published
                  </span>
                </td>
                <td className="flex flex-row px-6 py-4 whitespace-no-wrap  border-gray-200 text-sm leading-5 text-gray-500">
                  <button>
                    {" "}
                    <MdDelete className="text-3xl font-bold mr-4" />
                  </button>
                  <Link href="/dashboard/edit-project-details">
                    {" "}
                    <FaEdit className="text-3xl font-bold" />
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                  >
                    Show
                  </a>
                </td>
              </tr>

              <tr className="bg-gray-100">
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <input
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    type="checkbox"
                  />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    ghjghjhgj
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    ghjghjhgj
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://via.placeholder.com/400x400"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm leading-5 font-medium text-gray-900"></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    hgjhgjhgj
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Inactive
                  </span>
                </td>
                <td className="flex flex-row px-6 py-4 whitespace-no-wrap  border-gray-200 text-sm leading-5 text-gray-500">
                  <button>
                    {" "}
                    <MdDelete className="text-3xl font-bold mr-4" />
                  </button>
                  <Link href="/dashboard/edit-project-details">
                    {" "}
                    <FaEdit className="text-3xl font-bold" />
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                  >
                    Show
                  </a>
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <input
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    type="checkbox"
                  />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    hgjhgjhgj
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    hgjhgjhgj
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://via.placeholder.com/400x400"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm leading-5 font-medium text-gray-900"></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    gjghjhgjhg
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    draft
                  </span>
                </td>
                <td className="flex flex-row px-6 py-4 whitespace-no-wrap  border-gray-200 text-sm leading-5 text-gray-500">
                  <button>
                    {" "}
                    <MdDelete className="text-3xl font-bold mr-4" />
                  </button>
                  <Link href="/dashboard/edit-project-details">
                    {" "}
                    <FaEdit className="text-3xl font-bold" />
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                  >
                    Show
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default index;
