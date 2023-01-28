import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [anecdoteVotes, setAnecdoteVotes] = useState(new Uint8Array(anecdotes.length))

  const [selected, setSelected] = useState(0)

  const setRandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const voteForAnecdote = () => {
    const copy = [...anecdoteVotes]
    copy[selected] += 1
    setAnecdoteVotes(copy)
  }

  const getBestAnecdote = () => {
    var best = 0
    var bestVotes = 0

    for (let i = 0; i < anecdoteVotes.length; i++) {
      if (bestVotes < anecdoteVotes[i]) {
        bestVotes = anecdoteVotes[i]
        best = i
      }
    }

    return best
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br></br>
      has {anecdoteVotes[selected]} votes<br></br>
      <Button handleClick={voteForAnecdote} text="vote" />
      <Button handleClick={setRandomAnecdote} text="next anecdote" />
      <h1>Anecdote with the most votes</h1>
      {anecdotes[getBestAnecdote()]}<br></br>
      has {anecdoteVotes[getBestAnecdote()]} votes
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

export default App