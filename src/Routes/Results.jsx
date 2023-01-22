import { useState, useEffect } from 'react';
import { reCalculate } from '../functions';

const Results = ({ data }) => {

    const [lumpSum, setLumpSum] = useState(0);

    const calculateNewForecast = () => {
        // age, retirementAge, expectancyAge, currentSavings, debt, debtInterest, gradDate, income, endSavings
        setLumpSum(reCalculate(
            localData['age'][0],
            localData['retirementAge'][0],
            localData['expectancyAge'][0], // ?
            localData['savings'][0],
            localData['debt'][0],
            0.01, //debtinterest
            new Date("2025-03-26"), //gradDate
            localData['income'][0],
            0.07,
            0
        ));


    }

    useEffect(() => {
        calculateNewForecast();
    }, [])

    const localData = { ...data };

    for (let i in localData) {
        localData[i] = useState(data[i]);
    }

    const handleTextChange = (text, key) => {
        localData[key][1](text.target.value);
    }

    const handleParameterChange = (key) => {
        calculateNewForecast();
    }

    const handleAgeButton = (n) => {
        const newAge = localData.retirementAge[0] + n;
        localData.retirementAge[1](newAge);
    }

    // useEffect(() => {

    // }, [localData.retirementAge[0]])

    return (


        <div className='flex flex-col h-full w-full text-center space-y-2 py-8'>
            <div className='flex w-full justify-center items-center flex-col'>
                <span>Your annual stipend after retirement is:</span>
                <span className='flex justify-center items-center rounded p-2 text-4xl font-bold bg-gray-100'>{lumpSum.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })}</span>

            </div>
            {/* <span className='text-xl font-bold'>Your annual stipend after retirement is ${lumpSum.toFixed(2)}</span> */}

            <div className='flex w-full justify-around'>
                <button className="bg-yellow-400 text-white rounded-sm p-2 font-bold" onClick={() => handleAgeButton(-1)}>
                    Retire one year earlier
                </button>
                <button className="bg-yellow-400 text-white rounded-sm p-2 font-bold" onClick={() => handleAgeButton(1)}>
                    Retire one year later
                </button>
            </div>


            <div>
                {Object.entries(localData).map(([key, entry]) => {
                    return (
                        <div key={key} className='flex items-center justify-end p-1 w-full font-bold odd:bg-gray-100'>
                            <div className='flex items-center'>
                                <span className='flex w-1/2 h-full items-center text-left'>{key}:</span>
                                <input type="text" value={entry[0]} onChange={text => { handleTextChange(text, key) }} className='flex border p-2 rounded w-1/2'></input>
                            </div>

                            <button onClick={() => { handleParameterChange(key) }} className='p-2 bg-yellow-400 text-white rounded'>change</button>
                        </div>
                    )
                })}
            </div>


        </div>

    );
}

export default Results;