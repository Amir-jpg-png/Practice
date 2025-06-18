import Header from './components/header.jsx';
import Inputs from './components/inputs.jsx';
import { useState } from 'react';
import Results from './components/results.jsx';


function App() {


  const [initialInvestment, setInitialInvestment] = useState(null);
  const [annualInvestment, setAnnualInvestment] = useState(null);
  const [expectedReturn, setExpectedReturn] = useState(null);
  const [duration, setDuration] = useState(null);

  const inputProps = {
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
    setInitialInvestment,
    setAnnualInvestment,
    setExpectedReturn,
    setDuration
  }


  return (
      <>
        <Header />
        <Inputs inputProps={inputProps} />
        {duration > 0 ? <Results input={inputProps}/> : <p className="center" >Error: Duration 0 or lower!</p>}
      </>
  )
}

export default App
