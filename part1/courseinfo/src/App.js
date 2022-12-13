const Header = (props) => {
  return (
      <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  const [part1, part2, part3] = props.parts
  return (
    <div>
      <Add part={part1}/>
      <Add part={part2}/>
      <Add part={part3}/>
    </div>
  )
}

const Add = (props) => {
  const part = props.part
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Total = (props) => {
  const [part1, part2, part3] = props.parts
  return (
    <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App