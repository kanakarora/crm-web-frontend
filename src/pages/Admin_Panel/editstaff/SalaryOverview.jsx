import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useGlobalContext } from '../../../Context/GlobalContext';

const SalaryOverview = () => {
    const { selectedStaff } = useGlobalContext();
    const formatMonthYear = (value) => {
        const [year, month] = value.split("-");
        const date = new Date(year, month - 1); // JS months are 0-indexed
        return date.toLocaleString("default", { month: "long", year: "numeric" });
    };

    console.log(selectedStaff);
    return (
        <>
        {/* <div className='w-full p-[20px] pt-[80px] xl:p-[40px] relative xl:pt-[60px]    xl:pl-[320px] flex flex-col '> */}
            <div className='flex justify-between items-center  w-[100%] p-[20px] mt-[30px]  pr-0 xl:pr-[0px] pl-[0] top-0 bg-white'>
                <h3 className='font-medium'>Salary Overview</h3>
                <button className='second-btn'>Update Details</button>
            </div>

            {
                selectedStaff?.staffDetails?.SalaryDetails?.map((salary) =>
                    <div className='flex justify-between xl:items-center lg:items-center md:items-center gap-[10px] items-start  shadow bg-white flex-col xl:flex-row lg:flex-row md:flex-row w-full mb-4  text-start text-[14px]  text-[#000] p-4 rounded-md '>
                        <div className='flex gap-[10px]'>
                            <CalendarMonthIcon className='calender-icon' />
                            <div>
                                <h6 className="font-medium">{formatMonthYear(salary?.effective_date)}</h6>
                                <p className='text-[#9c8f8f]'>Duration: 01 {formatMonthYear(salary?.effective_date)?.split(" ")[0]} 2024 -  31 {formatMonthYear(salary?.effective_date)?.split(" ")[0]} 2024</p>
                            </div>
                        </div>
                        <div>
                            <h3 className=''>Due Amount</h3>
                            <h2 className='font-medium'>Rs. {salary?.ctc_amount}</h2>
                        </div>
                        <div className='w-full text-end xl:w-auto lg:w-auto md:w-auto'>
                            <Link to="/staff-salary-summary" className='bg-[#27004a] text-white rounded-md p-[7px]'>
                                <KeyboardArrowRightIcon />
                            </Link>
                        </div>
                    </div>
                )
            }



            {/* <div className='flex justify-between xl:items-center lg:items-center md:items-center gap-[10px] items-start  shadow bg-white flex-col xl:flex-row lg:flex-row md:flex-row w-full mb-4  text-start text-[14px]  text-[#000] p-4 rounded-md '>
                <div className='flex gap-[10px]'>
                    <CalendarMonthIcon className='calender-icon' />
                    <div>
                        <h6 className="font-medium">October 2024</h6>
                        <p className='text-[#9c8f8f]'>Duration: 01 December 2024 -  31 December 2024</p>
                    </div>
                </div>
                <div>
                    <h3 className=''>Due Amount</h3>
                    <h2 className='font-medium'>र 322.00</h2>
                </div>
                <div className='w-full text-end xl:w-auto lg:w-auto md:w-auto'>
                    <Link to="/staff-salary-summary" className='bg-[#27004a] text-white rounded-md p-[7px]'>
                        <KeyboardArrowRightIcon />
                    </Link>
                </div>
            </div>


            <div className='flex justify-between xl:items-center lg:items-center md:items-center gap-[10px] items-start  shadow bg-white flex-col xl:flex-row lg:flex-row md:flex-row w-full mb-4  text-start text-[14px]  text-[#000] p-4 rounded-md '>
                <div className='flex gap-[10px]'>
                    <CalendarMonthIcon className='calender-icon' />
                    <div>
                        <h6 className="font-medium">October 2024</h6>
                        <p className='text-[#9c8f8f]'>Duration: 01 December 2024 -  31 December 2024</p>
                    </div>
                </div>
                <div>
                    <h3 className=''>Due Amount</h3>
                    <h2 className='font-medium'>र 322.00</h2>
                </div>
                <div className='w-full text-end xl:w-auto lg:w-auto md:w-auto'>
                    <Link to="/staff-salary-summary" className='bg-[#27004a] text-white rounded-md p-[7px]'>
                        <KeyboardArrowRightIcon />
                    </Link>
                </div>
            </div> */}


            <div className='text-center mt-[40px]'>
                <button className='second-btn'>Load More</button>
            </div>

        {/* </div> */}
        </>
    )
}

export default SalaryOverview