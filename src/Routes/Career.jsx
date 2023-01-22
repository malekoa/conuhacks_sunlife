import { Link } from "react-router-dom";
import { salaries_list } from '../salaries'
import { useState } from "react";

// function that finds the salary of a job title from the salaries_list
function findSalary(job_title) {
    for (let i = 0; i < salaries_list.length; i++) {
        if (salaries_list[i].job_title === job_title) {
            return salaries_list[i].salary;
        }
    }
}

// convert date object to 'MM/DD/YYYY' format
const formatDate = (date) => {
    date = new Date(date)
    const month = date.getMonth() + 1
    const day = date.getDate()
    const year = date.getFullYear()
    return `${month}/${day}/${year}`
}

function Career(props) {
    // dropdown state
    const [job, setJob] = useState("Accountant");

    return (
        <div className="flex flex-col w-11/12 md:w-1/2 p-8 shadow space-y-8 rounded bg-gray-100 text-gray-900">
            <span className="text-2xl font-bold">Tell us about your career.</span>

            <div className="flex flex-col w-full space-y-4">
                <div className="flex flex-col w-full space-y-2">
                    <span>What field do you expect to work in?</span>
                    <select className="flex w-full border rounded-sm p-2" value={job} onChange={(e) => { setJob(e.target.value); props.setData.setIncome(findSalary(e.target.value)) }}>
                        {salaries_list.map((job, i) => {
                            return <option value={job.job_title} key={i}>{job.job_title}</option>
                        })}
                    </select>
                </div>
                <div className="flex flex-col w-full space-y-2">
                    <span>What is your expected graduation date?</span>
                    <input type="date" className="flex w-full border rounded-sm p-2" value={props.data.gradDate} onChange={(e) => props.setData.setGradDate(e.target.value)} />
                </div>
            </div>

            <div className="flex justify-end space-x-4">

                {/* Link that navigates to finances */}
                <Link to="/finances">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-sm p-2 px-4 font-bold transition">Back</button>
                </Link>

                {/* Link that navigates to forecast page */}
                <Link to="/forecast">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-sm p-2 px-4 font-bold transition">Next</button>
                </Link>

            </div>

            <div className="flex w-full justify-around">
                {/* 4 gray circles w-2 */}
                <div className="flex w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="flex w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="flex w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="flex w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>

        </div>
    );
}

export default Career;