import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Documents = () => {


    const fileInputRef = useRef(null);

    // Function to handle button click and open file input dialog
    const handleUploadClick = () => {
        fileInputRef.current.click(); // Trigger click on input type="file"
    };

      // Function to handle file selection
      const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the selected file
        console.log("Selected file:", file);
    };

    const documents = [
        {
          type: "Salary Slip",
          fileName: "Salary Slip",
          isFolder: true,
          addedOn: null,
        },
        {
          type: "Degree",
          fileName: "Screenshot 2024-11-07 103717.png",
          isFolder: false,
          addedOn: "12 Nov 2024",
        },
      ]

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    return (
        <div className=' mt-[80px] w-[100%] '>
            <div className='flex items-center border-b border-[#dbdbdb] pb-[20px]   justify-between'>
                <h1>Documents</h1>
                <div>
                    <button className='bg-[#27004a] mr-[16px] p-[8px] rounded-lg text-[14px] text-[white]' onClick={onOpenModal}>Add Document</button>

                    
                    <Modal open={open} onClose={onCloseModal} center>
                        <h2 className='border-b border-[#dbdbdb] pb-[16px]'>Upload Document</h2>

                        <div className="w-[100%]">


                            <select

                                className="border border-1 rounded-md p-[5px] mt-[24px] w-[100%] mb-[20px] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]"
                            >
                                <option> Select a Document </option>
                                <option> Aadhar </option>
                                <option>Pancard</option>
                                <option> Driving License </option>



                            </select>

                            <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: "none" }} // Hide the input element
                />
                            <button className=' p-[6px] pl-[18px] pr-[18px] rounded-lg bg-[#27004a] text-[white] mb-[20px]' onClick={handleUploadClick}>
                                Upload
                            </button>

                        </div>

                        <div className='flex items-center gap-[10px] border-t border-[#dbdbdb] pt-[16px] justify-end '>
                            <button className='p-[6px] text-[14px] rounded-md  border border-[#dbdbdb]'>Cancel</button>
                            <button className='bg-[#27004a] text-[14px] pl-[18px] pr-[18px] rounded-md text-[white] p-[6px]'>OK</button>
                        </div>
                    </Modal>

                </div>


            </div >
            <div className="w-full p-4 md:p-6">
      <div className="rounded-lg border bg-white shadow-sm">
        <div className="w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="bg-gray-50/75">
              <tr className="border-b transition-colors">
                <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">
                  Document Type
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">
                  File Name
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">
                  Added On
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, index) => (
                <tr
                  key={index}
                  className="border-b transition-colors hover:bg-gray-50/50"
                >
                  <td className="p-4 align-middle">{doc.type}</td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-2">
                      {doc.isFolder ? (
                        <svg
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                        </svg>
                      ) : (
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                      {doc.fileName}
                    </div>
                  </td>
                  <td className="p-4 align-middle">{doc.addedOn || "-"}</td>
                  <td className="p-4 align-middle">
                    {!doc.isFolder && (
                      <button className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-700">
                        Download
                        <svg
                          className="ml-1 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
        </div >
    )
}

export default Documents