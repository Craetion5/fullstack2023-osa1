import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
  }

  const increaseBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increaseGood} text="good" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticsLine = ({ titleText, valueText }) => {
  return (
    <tr>
      <td>{titleText}</td>
      <td>{valueText}</td>
    </tr>
  )
}

const Statistics = ({ good, bad, neutral }) => {
  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <div>
        <p>No feedback given.</p>
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine titleText="good" valueText={good} />
          <StatisticsLine titleText="neutral" valueText={neutral} />
          <StatisticsLine titleText="bad" valueText={bad} />
          <StatisticsLine titleText="all" valueText={good + neutral + bad} />
          <StatisticsLine titleText="average" valueText={(good + -1 * bad) / (good + neutral + bad)} />
          <StatisticsLine titleText="positive" valueText={100 * (good / (good + neutral + bad)) + "%"} />
        </tbody>
      </table>
    </div>
  )
}

export default App