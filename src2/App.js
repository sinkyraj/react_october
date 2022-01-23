import './App.css'
import Form from './components/Form'
import Card from './components/Card'

// const person1 = {
//   name: 'John Doe',
//   bio: 'A short bio about John Doe.'
// }

// const Person2 = {
//   name: 'Jane Doe',
//   bio: 'A short bio about Jane Doe.'
// }

const Persons= [
  {
    name: 'John Doe',
    bio: 'A short bio about John Doe'
  },
  {
    name: 'Jane Doe',
    bio: 'A short bio about Jane Doe'
  },
  {
    name: 'Jenny Doe',
    bio: 'A short bio about Jenny Doe'
  }
]

const App = () => {
  return (
    <>
      <h1 className='heading'>New App</h1>
       <button className="btn btn-primary">Click Me</button>
     <Form />
      
       { Persons.map(person=>(<Card 
       name={person.name}
       bio={person.bio}
       />)) }
     
    
    </>
  )
}

export default App