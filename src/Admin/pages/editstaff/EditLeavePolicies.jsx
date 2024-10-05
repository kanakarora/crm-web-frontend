import React from 'react'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const EditLeavePolicies = () => {

    let subtitle;
    // when onclick update staff
    const [modalIsOpen10, setIsOpen10] = React.useState(false);
    function openModal10() {
        setIsOpen10(true);
    }
    function afterOpenModal10() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal10() {
        setIsOpen10(false);
    }
    // when onclick update staff


    // when on click update leave policiy
    const [modalIsOpen12, setIsOpen12] = React.useState(false);
    function openModal12() {
        setIsOpen12(true);
    }
    function afterOpenModal12() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal12() {
        setIsOpen12(false);
    }
    // when on click update leave policy

    return (
        <div className='w-full p-[20px] pt-[80px] xl:p-[40px] relative xl:pt-[60px]    xl:pl-[320px] flex flex-col '>
        <div className='flex justify-between items-center  w-[100%] p-[20px] xl:pr-0 pr-0 xl:pr-[20px] pl-[0] top-0 bg-white'>

                <h3 className='font-medium'>Leave & Balance Details
                </h3>
                <button className='second-btn'>Update Details</button>
            </div>


            <div className='mt-5'>
                <button className='shadow bg-white w-full mb-4  text-start text-[14px]  text-[#000] p-4 rounded-md ' onClick={openModal12}> Leave Policy</button>
                <button className='shadow bg-white w-full mb-4  text-start text-[14px]  text-[#000] p-4 rounded-md ' onClick={openModal10}> Leave Balances</button>
                <button className='shadow bg-white w-full mb-4  text-start text-[14px]  text-[#000] p-4 rounded-md ' > Leave Request</button>





            </div>




            {/* when onclick update staff */}

            <Modal
                isOpen={modalIsOpen10}
                onAfterOpen={afterOpenModal10}
                onRequestClose={closeModal10}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3     text-[14px] text-center bg-[#F0F6FE] rounded-t-lg rounded-r-lg rounded-b-none'>Update Leave Balances for all Staff</h2>
                <button onClick={closeModal10} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='pb-2'>


                    <div className='flex justify-between items-center p-[10px] border border-b border-l-0  border-t-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] '>
                        <div className='flex gap-[0px] items-center '>
                            <h4 className='m-0 font-medium text-[10px] xl:text-[14px]' >Step 1. Download SalaryBox Template</h4>
                        </div>
                        <div className="flex items-center  ">
                            <Link to="#" className='whitespace-nowrap outline-dashed p-1 rounded-md text-[13px] outline-1 outline-offset-1'>Download Template</Link>
                        </div>
                    </div>




                    <div className='flex justify-between items-center p-[10px] border border-b border-l-0  border-t-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] '>
                        <div className='flex gap-[0px] items-center '>
                            <h4 className='m-0 font-medium text-[10px] xl:text-[14px]' >Step 2. Upload Leave Balances</h4>
                        </div>
                        <div className="flex items-center  ">
                            <button className='outline-dashed p-1 rounded-md text-[13px] outline-1 outline-offset-1'>Upload Staff List</button>
                            {/* <input type='file' placeholder='ddjfksj'/> */}
                        </div>
                    </div>



                </div>
            </Modal>
            {/* when onclick update staff
             */}


             

            {/* when onclick leave policies
             */}

            <Modal
                isOpen={modalIsOpen12}
                onAfterOpen={afterOpenModal12}
                onRequestClose={closeModal12}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3     text-[14px]   rounded-t-lg rounded-r-lg rounded-b-none'>Update Leave Policy for all staff</h2>
                <button onClick={closeModal12} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='pb-2'>

                    <Tabs className="p-[s0px] fixed-tab-section">
                        <TabList className="flex justify-around items-center mt-3 m-2 xl:m-2 mb-2 bg-[#F4F5F9] pt-[10px] pb-[10px] rounded-md">
                            <label className='text-[14px]'>Select Type</label>
                            <Tab className="cursor-pointer flex items-center gap-[10px]">
                                <input type="radio" id="fixed" name='fixed' className='rounded-full ' />
                                <label for="fixed" className='text-[14px]'> Monthly</label><br />
                            </Tab>
                            <Tab className="cursor-pointer flex items-center gap-[10px]">
                                <input type="radio" id="flexible" name='fixed' className='rounded-full ' />
                                <label for="flexible" className='text-[14px]'> Yearly</label><br />
                            </Tab>
                        </TabList>
                        <TabPanel>
                          <div className='w-[100%] flex rounded-md shadow overflow-scroll border border-1 mt-4 pl-3 pr-3'>
                            <table className='table-section mt-4'>
                                <thead className='border border-1 '>
                                    <th>Leave Type</th>
                                    <th>Allowed Leaves (Per Month)</th>
                                    <th>Carry-forward Leaves (On Month End)</th>
                                    
                                </thead>
                                <tbody>
                                    <td>Casual Leave</td>
                                    <td><input type='text'/></td>
                                    <td><input type='text'/></td>
                                    
                                </tbody>
                            </table>
                          </div>
                        </TabPanel>


                        <TabPanel>
                          
                        </TabPanel>

                    </Tabs>



                </div>
            </Modal>
            {/* when onclick leave policies
             */}



                
        </div>
    )
}

export default EditLeavePolicies