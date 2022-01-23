import { useState } from 'react'

const App=() =>{

  const[userState, setUserState] = useState({
    email: '',
    password: '',
    users: []
  })

  const handleSubmit= event =>{
    event.preventDefault()
    const users = JSON.parse(JSON.stringify(userState.users))
    users.push({
      email: userState.email,
      password: userState.password
    })
    setUserState({...userState, users, email: '', password:''})
    
  }

  const handleInputChange =({ target })=>{
   setUserState({...userState, [target.name]: target.value})
  }

return(
  <>
<form>
  <p>
    <label htmlFor="email">email</label>
    <input 
    type="text" 
    name='email'
    value={userState.email}
    onChange={handleInputChange}
    
    />
  </p>
      <p>
        <label htmlFor="password">Password</label>
        <input 
        type="text" 
        name='password' 
        onChange={handleInputChange}
        value={userState.password}
        />
      </p>
      <button 
      onClick={handleSubmit}>
        Sign In
        </button>
</form>
<div>
  {
    userState.users.map(user =>(<div>
      <h5>Email: {user.email}</h5>
      <h5>Password:{user.password} </h5>
      <hr/>
      </div>
      ))
  }
     
</div>

</>
)
}

export default App