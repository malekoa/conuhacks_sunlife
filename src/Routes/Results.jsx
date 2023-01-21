import { useState, useEffect } from 'react';

const Results = ({ data }) => {
    const [lumpSum, setLumpSum] = useState(0);

    const reCalculate = () => {
        // TODO
    }

    const localData = {...data};

    for (let i in localData) {
        localData[i] = useState(data[i]);
    }

    const handleTextChange = (text, key) => {
        localData[key][1](text.target.value);
    }

    const handleParameterChange = (key) => {
        reCalculate();
    }

    const handleAgeButton = (n) => {
        const newAge = localData.retirementAge[0] + n;
        localData.retirementAge[1](newAge);
    }

    // useEffect(() => {
        
    // }, [localData.retirementAge[0]])

    return (

        <div>
            <h1>Your annual stipend after reitrement is {lumpSum} </h1>

            <button 
                className="bg-yellow-400 text-white rounded-sm p-2 px-4 font-bold"
                onClick={() => handleAgeButton(-1)}
            >
                    Retire one year earlier
                </button>
            <button 
                className="bg-yellow-400 text-white rounded-sm p-2 px-4 font-bold"
                onClick={() => handleAgeButton(1)}
            >
                    Retire one year later
                </button>

            <div>
                {Object.entries(localData).map(([key, entry]) => {
                    return (
                    <div key={key}>
                        <div>{key} : 
                        <input 
                            type="text" 
                            value={entry[0]}
                            onChange={text => {handleTextChange(text, key)}}
                        >

                        </input>
                        </div>
                         
                        <button onClick={() => {handleParameterChange(key)}}>change</button>
                    </div>
                    )  
                })}
            </div>

            
        </div>
        
    );
}

export default Results;