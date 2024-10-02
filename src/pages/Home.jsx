import Banner from "../component/banner";
import { useEffect, useState } from 'react';
import JobsComponent from "./Jobs"; // Rename to avoid conflict
import Card from "../component/Card";
import Sidebar from "../sidebar/Sidebar";
import Newsletter from "../component/Newsletter";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // Rename to avoid conflict
  const [jobsData, setJobsData] = useState([]); // Rename to avoid conflict

  useEffect(() => {
    fetch("jobs.json")
      .then(res => res.json())
      .then(data => {
        setJobsData(data);
      });
  }, []);

  console.log(jobsData);

  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // filter jobs by title
  const filterItems = jobsData.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  // radio based btn filters
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // btn based filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // main function
  const filterData = (jobs, selected, query) => {
    let filterJobs = jobs;

    if (query) {
      filterJobs = filterItems;
    }

    if (selected) {
      filterJobs = filterJobs.filter(({ jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate }) => (
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        parseInt(maxPrice) <= parseInt(selected) ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase()
      ));
      console.log(filterJobs);
    }

    return filterJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filterData(jobsData, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded ">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        <div className="col-span-2 bg-white p-4 rounded "><JobsComponent result={result} /></div>

        <div className="bg-white p-4 rounded "><Newsletter/></div>

      </div>
    </div>
  );
};

export default Home;
