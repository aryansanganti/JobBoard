import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import CreatableSelect from 'react-select/creatable';

const CreateJob = () => {
    const [selectOption,setSelectedOption]=useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => { 
        data.skills =  selectOption;
        // console.log(data) 
        fetch("http://localhost:5000/post-jobs",{
            method:"POST",
            headers:{"Content-Type":"app"},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then((result)=>{
            console.log(result);
            if(result.acknowledged===true){
                alert("Job Posted successfully")
            }
            reset()
        });

    };
        
    const options =[
        {value:"JavaScript",label:"JavaScript"},
        {value:"C++",label:"C++ "},
        {value:"HTML",label:"HTML"},
        {value:"CSS",label:"CSS"},
        {value:"Node",label:"Node"},
        {value:"React",label:"React "},
    ]


    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 '>
            <div className='bg-[#FAFAFA] py-10px px-4 lg:px-16'>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* 1st Row */}
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full '>
                            <label className='block mb-2 text-lg '>Job Title </label>
                            <input type="text" placeholder="First name" defaultValue={"Web Developer"} {...register("jobTitle")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 
                            text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'/>
                        </div>
                        <div className='lg:w-1/2 w-full '>
                            <label className='block mb-2 text-lg '>Company Name </label>
                            <input type="text" placeholder="Example:Microsoft " {...register("companyName")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 
                            text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'/>
                        </div>
                    </div>

                    {/* 2nd Row */}
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full '>
                            <label className='block mb-2 text-lg '>Minimum Salary  </label>
                            <input type="text" placeholder="20K"
                                {...register("minPrice")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 
                            text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'/>
                        </div>
                        <div className='lg:w-1/2 w-full '>
                            <label className='block mb-2 text-lg '>Maximun Salary</label>
                            <input type="text" placeholder="$120k" {...register("maxPrice")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 
                            text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'/>
                        </div>
                    </div>
                    {/* 3rd Row  */}
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full '>
                            <label className='block mb-2 text-lg '>Salary Type </label>
                            <select {...register("salaryType")}className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 
                            text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'>
                                <option value="">Choose your Salary</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>
                        <div className='lg:w-1/2 w-full '>
                            <label className='block mb-2 text-lg '>Job Location</label>
                            <input type="text" placeholder="Seattle" {...register("jobLocation")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 
                            text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'/>
                        </div>
                    </div>
                    {/* 4th Row */}
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        
                    <div className='lg:w-1/2 w-full '>
                            <label className='block mb-2 text-lg '>Job Posting Date </label>
                            <input type="text" placeholder="Ex:2023-11-3" {...register("postingDate")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 
                            text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'/>
                        </div>
                        <div className='lg:w-1/2 w-full '>
                            <label className='block mb-2 text-lg '>Expirence Level </label>
                            <select {...register("postingDate")}className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 
                            text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'>
                                <option value="">Choose your Experience</option>
                                <option value="None">None</option>
                                <option value="Internship">Internship</option>
                                <option value="Any Experience">Any Experience</option>
                            </select>
                        </div>
                    </div>
                    {/* 5th Row */}
                    <div>
                    <label 
                    className='block mb-2 text-lg ' >Required Skill Sets:</label>
                    <CreatableSelect defaultValue={selectOption} 
                    onChange={setSelectedOption}
                    options={options}
                    isMulti
                    className='create-job-input py-4' />
                    </div>
                    
                    {/* 6th Row */}
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        
                    <div className='lg:w-1/2 w-full '>
                            <label className='block mb-2 text-lg '>Company Logo </label>
                            <input type="url" placeholder="Paste your Company URL:https://wetransfer.com/img1" {...register("companyLogo")} className='create-job-input'/>

                        </div>
                        <div className='lg:w-1/2 w-full '>
                            <label className='block mb-2 text-lg '>Employement Type </label>
                            <select {...register("employementType")}className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 
                            text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'>
                                <option value="">Choose your Experience</option>
                                <option value="Full Time">Full Time </option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Tempeorary">Tempeorary</option>
                            </select>
                        </div>
                    </div>

                    {/* 7th Row */}
                    <div className='w-full'>
                    <label className='block mb-2 text-lg '>Job Descrription </label>
                    <textarea className='w-full pl-3 py-1.5 focus-outline-none  placeholder:text-gray-700' 
                    rows={6}
                    placeholder='Job description'
                    {...register("description")}/>
                    </div>

                    {/* Last Row  */}
                        <div>
                        <label className='block mb-2 text-lg '>Job Posted by </label>
                        <div className='lg:w-1/2 w-full '>
                            <label className='block mb-2 text-lg '>Minimum Salary  </label>
                            <input type="email" placeholder="Your email"
                                {...register("postedBy")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 
                            text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'/>
                        </div>
                        </div>
                    

                    <input type="submit" className='block mt-10 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer'  />
                </form>
            </div>
        </div>
    )
}

export default CreateJob