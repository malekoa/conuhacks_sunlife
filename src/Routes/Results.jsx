import { useState, useEffect } from 'react';

const Results = ({ data, setData}) => {
    const localData = {...data};
    for (let i in localData) {
        localData[i] = useState(data[i]);
    }

    const handleTextChange = (text, key) => {
        localData[key][1](text.target.value);
    }

    const handleParameterChange = (key) => {
        const setKey = 'set' + key[0].toUpperCase() + key.slice(1);
        localData[key][1];
    }

    useEffect(() => {   
        console.log('effect')
    })

    return (

        <div>
            <h1>Your annual stipend after reitrement is x </h1>
            <h2>Which is x monthly</h2>

            <button className="bg-yellow-400 text-white rounded-sm p-2 px-4 font-bold">Retire one year earlier</button>
            <button className="bg-yellow-400 text-white rounded-sm p-2 px-4 font-bold">Retire one year later</button>

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