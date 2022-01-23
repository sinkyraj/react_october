import { useState } from 'react'

const App=() =>{

  const[userState, setUserState] = useState({
    email: '',
    password: '',
    user:{
      email: '',
      password: ''
    }
  })

  const handleSubmit= event =>{
    event.preventDefault()
    //  console.log(userState.email, userState.password)
    setUserState({...userState, 
    user: {
      email: userState.email,
      password: userState.password,
     
    },
     email: '',
     password: ''
    })
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
      <h2>email:{userState.user.email} </h2>
      <h2>password:{userState.user.password} </h2>
</div>

  </>
)
}

export default App