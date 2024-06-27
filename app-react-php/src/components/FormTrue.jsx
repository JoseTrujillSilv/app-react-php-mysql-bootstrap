import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function FormTrue() {
  return (
    <>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:'20px',height:'100vh'}}>
        <h1 style={{color:'#28a745',fontWeight:'bold'}}>Registro realizado con éxito <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
         </svg></h1>
        <div>
        <Link to="/">
          <Button variant="success" type="submit">Volver</Button>
        </Link>
        </div>
      </div>
    </>
  )
}

export default FormTrue
