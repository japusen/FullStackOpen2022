import { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const StatisticsLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({ good, neutral, bad}) => {
  const allFeedback = () => good + neutral + bad
  const average = () => (good + -1*bad) / allFeedback()
  const positive = () => 100 * good / allFeedback()

  if (allFeedback() === 0)
    return (
    <tbody>
      <tr>
        <td>No feedback given</td>
      </tr>
    </tbody>
    )
  else
    return (
      <tbody>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={allFeedback()} />
        <StatisticsLine text="average" value={average()} />
        <StatisticsLine text="positive" value={positive()} />
      </tbody>
    )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <table>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </table>
    </div>
  )
}

export default App