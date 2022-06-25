import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from "./component/Pages/MainPage";
import Testing from "./component/Pages/Testing"


function App() {
  return (

    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/test" element={<Testing/>}/>
      </Routes>
    </Router>
    </>
    
    
  );
}

export default App;
