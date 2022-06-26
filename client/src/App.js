import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from "./component/Pages/MainPage";
import Indian from "./component/Pages/Indian"
import Alantic from "./component/Pages/Alantic"
import Artic from "./component/Pages/Artic"
import Pacific from "./component/Pages/Pacific"


function App() {
  return (

    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/Pacific" element={<Pacific/>}/>
        <Route path="/Alantic" element={<Alantic/>}/>
        <Route path="/Indian" element={<Indian/>}/>
        <Route path="/Artic" element={<Artic/>}/>
      </Routes>
    </Router>
    </>
    
    
  );
}

export default App;
