import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
import Form from './components/Form.jsx';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import FormTrue from './components/FormTrue.jsx';
import Table from './components/Table.jsx';
 
function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/formTrue" element={<FormTrue/>}/>
        <Route path="/table" element={<Table/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
