import { useState } from 'react';
import { FaTrash } from "react-icons/fa";
import { IoPencil } from "react-icons/io5";
import ReviewersBox from "./components/ReviewersBox";
import { IoCheckmarkDone } from "react-icons/io5";

function App() {
  const [tableDetails, setTableDetails] = useState(
    [
      {
        status: "Lorem ipsum dolor",
        ID: "12",
        Start: "Lorem ipsum dolor",
        Optimization: "Lorem ipsum dolor",
        Steering: "Lorem ipsum dolor",
        Rules: "Lorem ipsum dolor ",
        Configuration: "Lorem ipsum dolor",
        Reviewers: "Andrea Antonescu",
        Upload: "Nov 6, 2023, 2:53 am",
      },
      {
        status: "Lorem ipsum dolor",
        ID: "34",
        Start: "Lorem ipsum dolor",
        Optimization: "Lorem ipsum dolor",
        Steering: "Lorem ipsum dolor",
        Rules: "Lorem ipsum dolor",
        Configuration: "Lorem ipsum dolor",
        Reviewers: "Andrea Antonescu",
        Upload: "Nov 6, 2023, 10:09 am",
      }
    ]
  );

  return (
    <>
      <div className="relative w-full p-3 mb-6">
        <div className="bg-transparent rounded-md shadow-lg overflow-x-auto">
          <table className="w-full">
            <thead className="">
              <tr className="border border-solid border-l-0 border-r-0 ">
                <th className="text-sm text-left border border-l-0 border-r-0 text-gray-500 px-3 py-3">Status</th>
                <th className="text-sm text-left border border-l-0 border-r-0 text-gray-500 px-3 py-3">ID</th>
                <th className="text-sm text-left border border-l-0 border-r-0 text-gray-500 px-3 py-3">Start</th>
                <th className="text-sm text-left border border-l-0 border-r-0 text-gray-500 px-3 py-3">Optimization</th>
                <th className="text-sm text-left border border-l-0 border-r-0 text-gray-500 px-3 py-3">Steering</th>
                <th className="text-sm text-left border border-l-0 border-r-0 text-gray-500 px-3 py-3">#Rules</th>
                <th className="text-sm text-left border border-l-0 border-r-0 text-gray-500 px-3 py-3">Configuration</th>
                <th className="text-sm text-left border border-l-0 border-r-0 text-gray-500 px-3 py-3">Reviewers</th>
                <th className="text-sm text-left border border-l-0 border-r-0 text-gray-500 px-3 py-3">Upload</th>
                <th className="text-sm text-left border border-l-0 border-r-0 text-gray-500 px-3 py-3">      </th>
              </tr>
            </thead>
            <tbody className="">
              
              {tableDetails.map((item) => {
                return (
                  <tr className="border border-solid w-auto border-l-0 border-r-0 px-4">
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-3">
                      <IoCheckmarkDone className="" size={20} color={"#1D4ED8"}/>
                    </td>
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-3">{item.ID}</td>
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-3">{item.Start}</td>
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-3">{item.Optimization}</td>
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-3">{item.Steering}</td>
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-3">{item.Rules}</td>
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-3">{item.Configuration}</td>
                    <td className="text-sm text-gray-500 py-3 w-auto">
                      <div className="w-full">
                        <ReviewersBox name={item.Reviewers}/>
                      </div>
                    </td>
                    <td className="text-sm whitespace-nowrap text-left text-gray-500 px-3 py-3">{item.Upload}</td>
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-3">
                      <div className="flex space-between gap-2 w-full ">
                        <IoPencil className="fill-gray-400" size={17}/>
                        {/* <img src="/assets/close-eyes.png" alt="closed eyes image"/> */}
                        <FaTrash className="fill-gray-400" size={17}/>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App;
