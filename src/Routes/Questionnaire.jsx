function Questionnaire() {
    return (
        <div className="flex w-full h-screen justify-center items-center">
            <div className="flex flex-col items-start w-1/2 border p-4 rounded-sm space-y-4">
                <span className="text-2xl font-bold">Tell us about yourself.</span>
                <div>
                    <span>What is your name?</span>
                </div>
            </div>
        </div>
    );
}

export default Questionnaire;