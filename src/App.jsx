import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Questionnaire from './Routes/Questionnaire'
import Results from './Routes/Results'
import PersonalQuestions from './Routes/PersonalQuestions'
import Finances from './Routes/Finances'
import Career from './Routes/Career'
import Forecast from './Routes/Forecast'

function App() {

  // object that holds name, age, savings, debt, degree, boolean for if they are going to grad school, graduation date, and monthly savings percentage
  const [name, setName] = useState('name')
  const [age, setAge] = useState(30)
  const [savings, setSavings] = useState(1000)
  const [debt, setDebt] = useState(1000)
  const [degree, setDegree] = useState('undergrad')
  const [gradSchool, setGradSchool] = useState(false)
  const [gradDate, setGradDate] = useState('10/10/2023')
  const [monthlySavings, setMonthlySavings] = useState(10)
  const [retirementAge, setRetirementAge] = useState(65)
  const [debtInterest, setDebtInterest] = useState(0.05)
  const [income, setIncome] = useState(50000)
  const [expectancyAge, setExpectancyAge] = useState(80);


  // object that holds all the data
  const data = {
    name,
    age,
    savings,
    debt,
    degree,
    gradSchool,
    gradDate,
    monthlySavings,
    retirementAge,
    income,
    expectancyAge
  
  }

  // object that holds all the functions that update the data
  const setData = {
    setName,
    setAge,
    setSavings,
    setDebt,
    setDegree,
    setGradSchool,
    setGradDate,
    setMonthlySavings,
    setRetirementAge,
    setIncome,
    setExpectancyAge
  }

  return (
    <div className='flex flex-col w-full h-screen justify-center items-center'>
      <Router>
        <Routes>
          <Route path="/" element={<Questionnaire data={data} setData={setData} />} />

          <Route path="/personal" element={<PersonalQuestions data={data} setData={setData} navigate={useNavigate} />} />

          <Route path="/finances" element={<Finances data={data} setData={setData} navigate={useNavigate} />} />

          <Route path="/career" element={<Career data={data} setData={setData} navigate={useNavigate} />} />

          <Route path="/forecast" element={<Forecast data={data} setData={setData} navigate={useNavigate} />} />

          <Route path="/results" element={<Results data={data} setData={setData} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
