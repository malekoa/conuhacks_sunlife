import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Questionnaire from './Routes/Questionnaire'
import Results from './Routes/Results'
import { useState } from 'react';

function App() {

  // object that holds name, age, savings, debt, degree, boolean for if they are going to grad school, graduation date, and monthly savings percentage
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [savings, setSavings] = useState('')
  const [debt, setDebt] = useState('')
  const [degree, setDegree] = useState('')
  const [gradSchool, setGradSchool] = useState(false)
  const [gradDate, setGradDate] = useState('')
  const [monthlySavings, setMonthlySavings] = useState('')

  // object that holds all the data
  const data = {
    name: name,
    age: age,
    savings: savings,
    debt: debt,
    degree: degree,
    gradSchool: gradSchool,
    gradDate: gradDate,
    monthlySavings: monthlySavings
  }

  // object that holds all the functions that update the data
  const setData = {
    setName: setName,
    setAge: setAge,
    setSavings: setSavings,
    setDebt: setDebt,
    setDegree: setDegree,
    setGradSchool: setGradSchool,
    setGradDate: setGradDate,
    setMonthlySavings: setMonthlySavings
  }

  return (
    <div className='flex flex-col w-full h-screen justify-center items-center'>
      <Router>
        <Routes>
          <Route path="/" element={<Questionnaire data={data} setData={setData} />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
