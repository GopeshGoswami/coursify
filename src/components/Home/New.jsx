import React from "react";

const New = () => {
  return (
    <div>
      {/* The button to open modal */}
      <label
        htmlFor={`modal_${key}`}
        className="btn w-full bg-[#3f6cdf] border-none text-white"
      >
        Apply
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id={`modal_${key}`} className="modal-toggle " />
      <div className="modal modal-bottom">
        {/* Modal Items Starts*/}
        <div className="modal-box bg-[#ffffff]">
          <div className="mx-32 pb-10">
            <div className="flex gap-2 flex-col items-center justify-center">
              <img src={job.employer_logo} alt="" className="w-32" />
              <p className="font-bold text-lg">{job.employer_name}</p>
              <p className="font-bold text-lg">{job.job_title}</p>
            </div>

            <div className="mt-5 flex flex-col gap-5">
              <div>
                <h3 className="font-bold text-lg">Job Type</h3>
                <p className="text-sm">{job.job_employment_type}</p>
              </div>

              <div>
                <h3 className="font-bold text-lg">Remote Policy</h3>
                <p className="text-sm">
                  {job.job_is_remote ? "Work From Home" : "Work From Office"}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg">Location</h3>
                <p className="text-sm">
                  {job.job_city}, {job.job_country}
                </p>
              </div>
              {job.job_required_skills !== null
                ? job.job_required_skills.map((skills) => <p>{skills}</p>)
                : ""}
            </div>

            <div className="modal-action">
              <label htmlFor={`modal_${key}`} className="btn">
                Close!
              </label>
            </div>
          </div>
        </div>
        {/* Modal Items Ends*/}
      </div>
      {/* <button
className="btn w-full bg-[#3f6cdf] border-none text-white"
onClick={handleModalOpen}
>
Apply
</button> */}
    </div>
  );
};

export default New;
