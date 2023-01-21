import { Link } from "react-router-dom";

function PersonalQuestions(props) {
    return (
        <div className="flex flex-col w-11/12 md:w-1/2 p-8 shadow space-y-8 rounded bg-gray-100 text-gray-900">
            <span className="text-2xl font-bold">Tell us about yourself.</span>

            <div className="flex flex-col w-full space-y-4">
                <div className="flex flex-col w-full space-y-2">
                    <span>What is your name?</span>
                    <input type="text" className="flex w-full border rounded-sm p-2" value={props.data.name} onChange={(e) => props.setData.setName(e.target.value)} />
                </div>
                <div className="flex flex-col w-full space-y-2">
                    <span>How old are you?</span>
                    <input type="text" className="flex w-full border rounded-sm p-2" value={props.data.age} onChange={(e) => props.setData.setAge(e.target.value)} />
                </div>
            </div>

            <div className="flex justify-end">

                {/* Link that navigates to finances page */}
                <Link to="/finances">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-sm p-2 px-4 font-bold transition">Next</button>
                </Link>

            </div>

            <div className="flex w-full justify-around">
                {/* 4 gray circles w-2 */}
                <div className="flex w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="flex w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="flex w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="flex w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>

        </div>
    );
}

export default PersonalQuestions;