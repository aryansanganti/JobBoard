import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const MyJobs = () => {
    const email = "aryansanganti"
    const [jobs, setJobs] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:3000/myJobs/aryansanganti@gmail.com `).then(res => res.json()).then(data => {
            setJobs(data)
        })
    }, []);

    const handleSearch = () => {
        const filter =jobs.filter((job)=>job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
        setJobs(filter);
        setIsLoading(false)
    }

    console.log(searchText);
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <div>
            <h1 className='text-center p-4'>ALL my Jobs</h1>
            <div className='search-box p-2 mb-2'>
                <input
                onChange={(e)=> setSearchText(e.target.value)}
                type="text"name='search' id='search' className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full'  />
                <button className='bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4 ' onClick={handleSearch}>Search</button>
          
            </div>
        </div>
        <section className="py-1 bg-blue/50">
        <div className="w-full">
        </div>
        </section>
        </div>
    )

}


export default MyJobs;