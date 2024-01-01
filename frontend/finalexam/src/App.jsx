import { useState } from 'react';
import NavBar from './components/navBar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<BrowserRouter>
    <NavBar />

    <Routes> 
    </Routes>


    </BrowserRouter>
    </>
  )
}

export default App
