import { useState } from "react";
import dribbble from "../../assets/dribbble.png";
// import JobModal from "./JobModal";

const Card = ({ job, key }) => {
  const truncatedText =
    job.job_description.length > 70
      ? job.job_description.slice(0, 70) + "..."
      : job.job_description;

  const jobTitleText =
    job.job_title.length > 27
      ? job.job_title.slice(0, 27) + "..."
      : job.job_title;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card w-full md:w-80 bg-[#eff6ff72] shadow-lg">
      <div className="py-10 px-5">
        {/* Logo */}
        <div className="flex justify-between">
          <div className="flex gap-2 flex-col">
            <img
              src={job.employer_logo !== null ? job.employer_logo : dribbble}
              alt=""
              className="w-14 object-cover h-14 rounded-full"
            />
            <p>{job.employer_name}</p>
          </div>
          <p></p>
        </div>
        {/* title */}
        <div className="mt-5 mb-2">
          <p className="font-bold text-lg">{jobTitleText}</p>
        </div>
        {/* Tags */}
        <div className="flex gap-3 mb-5">
          <p className="bg-[#9997ef] max-w-fit py-1 px-2 text-xs rounded-full">
            {job.job_employment_type}
          </p>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1 mb-5">
          <p className="font-bold text-sm">
            {job.job_city}, {job.job_country}
          </p>
          <p className="text-gray-500 text-sm">
            {/* {job.job_description} */}
            {truncatedText}
          </p>
        </div>

        {/* buttons */}
        <div className=" flex justify-center">
          <button
            className="btn w-full bg-[#3f6cdf] border-none text-white"
            type="button"
            onClick={() => setIsOpen(true)}
          >
            Apply
          </button>
          {isOpen && (
            <div className="fixed  z-40 flex overflow-x-hidden overflow-y-auto outline-none bg-white min-w-full max-h-[90vh] bottom-0 rounded-t-3xl shadow-lg left-0 focus:outline-none">
              <div className="relative flex overflow-scroll justify-center w-full">
                <button
                  className="float-right absolute right-0 text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  ×
                </button>
                <div className="relative flex flex-col w-full md:px-10 outline-none focus:outline-none md:mx-32">
                  <div className="flex gap-2 flex-col items-center justify-center">
                    <img src={job.employer_logo} alt="" className="w-32" />
                    <p className="font-bold text-lg">{job.employer_name}</p>
                    <p className="font-bold text-lg">{job.job_title}</p>
                  </div>

                  <div className="relative flex-auto p-6">
                    <div className="mt-5 flex flex-col gap-5">
                      <div>
                        <h3 className="font-bold text-lg">Job Type</h3>
                        <p className="text-sm">{job.job_employment_type}</p>
                      </div>

                      <div>
                        <h3 className="font-bold text-lg">Remote Policy</h3>
                        <p className="text-sm">
                          {job.job_is_remote
                            ? "Work From Home"
                            : "Work From Office"}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-lg">Location</h3>
                        <p className="text-sm">
                          {job.job_city}, {job.job_country}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Skills</h3>
                        <div className="flex gap-2 flex-wrap">
                          {job.job_required_skills !== null
                            ? job.job_required_skills.map((skills) => (
                                <p className="text-sm bg-[#9997ef] py-1 px-2 rounded-full text-white">
                                  {skills}
                                </p>
                              ))
                            : ""}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-bold text-lg">About the job</h3>
                        <p className="text-sm">{job.job_description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end p-6 rounded-b">
                    <button
                      className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase outline-none background-transparent focus:outline-none"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => setIsOpen(false)}
                    >
                      Close
                    </button>

                    <a
                      href={job.job_apply_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-wide bg-[#3f6cdf] border-none text-white"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => setIsOpen(false)}
                    >
                      Apply
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {isOpen && <div className="fixed inset-0 z-30 bg-black opacity-25"></div>}

      {/* <JobModal job={job} onClose={handleModalClose} /> */}
    </div>
  );
};

export default Card;
