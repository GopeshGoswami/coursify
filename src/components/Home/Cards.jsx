import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { useStore } from "../../store";
import NewSidebar from "../NewSidebar";

const Cards = () => {
  const [jobs, setJobs] = useState([]);

  const [designationValue, setDesignationValue] = useStore((state) => [
    state.designationValue,
    state.setDesignationValue,
  ]);

  const [locationValue, setLocationValue] = useStore((state) => [
    state.locationValue,
    state.setLocationValue,
  ]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        let apiQuery;
        if (designationValue !== "" && locationValue !== "") {
          apiQuery = designationValue + " in " + locationValue;
        } else if (designationValue === "" && locationValue !== "") {
          apiQuery = "Web Development in " + locationValue;
        } else {
          apiQuery = "Web Developer in Bangalore, India";
        }

        const response = await axios.get(
          "https://jsearch.p.rapidapi.com/search",
          {
            params: {
              query: apiQuery,
              page: "1",
              num_pages: "1",
            },
            headers: {
              "X-RapidAPI-Key":
                "bfac6c357fmsh7e8f321fe74026fp172804jsnb5ce30e932be",
              "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
            },
          }
        );
        setJobs(response.data.data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
  }, [designationValue, locationValue]); // Add dependencies here

  return (
    <div className="flex gap-10 flex-col mx-10 md:mx-0">
      <div className="flex items-center gap-5">
        <div className="md:hidden block">
          <NewSidebar />
        </div>
        <h2 className="text-black text-xl font-bold">Recommended jobs</h2>
      </div>

      <div className="flex gap-10 flex-wrap items-center">
        {jobs.map((job) => (
          <Card key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
