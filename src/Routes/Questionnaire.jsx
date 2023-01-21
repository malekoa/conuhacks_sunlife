function Questionnaire(props) {
    return (
        <div className="flex w-full h-full justify-center items-center">
            <div className="flex flex-col items-start w-1/2 border p-12 rounded space-y-4 shadow-sm">
                <span className="text-2xl font-bold">Tell us about yourself.</span>
                <div className="flex flex-col w-full justify-start">
                    <span className="flex">What is your name?</span>
                    {/* input field that updates props.name using props.setName */}
                    <input type="text" className="border rounded-sm p-2" value={props.name} onChange={(e) => props.setData.setName(e.target.value)} />
                </div>
                <div className="flex flex-col w-full justify-start">
                    <span className="flex">How old are you?</span>
                    {/* input field that updates props.age using props.setAge */}
                    <input type="text" className="border rounded-sm p-2" value={props.age} onChange={(e) => props.setData.setAge(e.target.value)} />
                </div>
                {/* div that holds a prev and next button that are justified between */}
                <div className="flex justify-between w-full">
                    <button className="bg-yellow-400 text-white rounded-sm p-2 px-4 font-bold">Prev</button>
                    <button className="bg-yellow-400 text-white rounded-sm p-2 px-4 font-bold">Next</button>
                </div>
            </div>
        </div>
    );
}

export default Questionnaire;