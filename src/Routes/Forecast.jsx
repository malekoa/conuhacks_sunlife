import { Link } from "react-router-dom";

function Forecast(props) {
    return (
        <div className="flex flex-col w-11/12 md:w-1/2 p-8 shadow space-y-8 rounded bg-gray-100 text-gray-900">
            <span className="text-2xl font-bold">Tell us how much you want to save.</span>

            <div className="flex flex-col w-full space-y-4">
                <div className="flex flex-col w-full space-y-2">
                    <span>How much do you want to save per month (as a percentage)?</span>
                    <input type="text" className="flex w-full border rounded-sm p-2" value={props.data.monthlySavings} onChange={(e) => props.setData.setMonthlySavings(e.target.value)} />
                </div>
            </div>

            <div className="flex justify-end space-x-4">

                {/* Link that navigates to career */}
                <Link to="/career">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-sm p-2 px-4 font-bold transition">Back</button>
                </Link>

                {/* Link that navigates to results page */}
                <Link to="/results">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-sm p-2 px-4 font-bold transition">Finish</button>
                </Link>

            </div>

            <div className="flex w-full justify-around">
                {/* 4 gray circles w-2 */}
                <div className="flex w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="flex w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="flex w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="flex w-2 h-2 bg-yellow-400 rounded-full"></div>
            </div>

        </div>
    );
}

export default Forecast;