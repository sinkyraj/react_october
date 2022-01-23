import Navbar from './components/Navbar'
const pages= ['Home', 'Portfolio', 'Contact', 'About']

const subPages= {
  category: 'Projects',
  pages: [ 'Project 1', 'Project 2', 'Project 3']
}


const App = () => {
  return (
    <>
      {/* <h1>App Page</h1> */}
      <Navbar 
      name="My first App"
      pages={pages}
      subPages={subPages}
      />
    </>
  )
}

export default App