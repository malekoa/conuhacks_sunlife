import { Link } from "react-router-dom";

function Career(props) {
    return (
        <div className="flex flex-col w-11/12 md:w-1/2 p-8 shadow space-y-8 rounded bg-gray-100 text-gray-900">
            <span className="text-2xl font-bold">Tell us about your career.</span>

            <div className="flex flex-col w-full space-y-4">
                <div className="flex flex-col w-full space-y-2">
                    <span>What is your major?</span>
                    <input type="text" className="flex w-full border rounded-sm p-2" value={props.data.degree} onChange={(e) => props.setData.setDegree(e.target.value)} />
                </div>
                <div className="flex flex-col w-full space-y-2">
                    <span>What is your expected graduation date?</span>
                    <input type="text" className="flex w-full border rounded-sm p-2" value={props.data.gradDate} onChange={(e) => props.setData.setGradDate(e.target.value)} />
                </div>
                <div className="flex w-full space-x-2 items-center justify-between">
                    <span>Grad school?</span>
                    {/* checkbox that corresponds to the value of props.data.gradSchool */}
                    <input type="checkbox" className="flex w-4 h-4 border rounded-sm p-2" checked={props.data.gradSchool} onChange={(e) => props.setData.setGradSchool(e.target.checked)} />
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