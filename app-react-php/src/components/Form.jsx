import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function BasicExample() {
  const formSubmit = async (e)=>{
    e.preventDefault();
    var formData = new FormData(e.target);
    await fetch('http://localhost/app-react/src/back/form.php',{
      method: 'POST',
      body: formData
    })
    .then(res => {return res.text()})
    .then(data => {data})

    window.location.href = '/formTrue';
  }

  const sendTable = ()=>{
    window.location.href = '/table';
  }


  return (
    <div style={{display:'flex',justifyContent:'center',padding:'20vh 0px'}}>
        <Form className='form' onSubmit={formSubmit} method='POST'>
        <h3 className='text-primary pb-3' style={{fontWeight:'bold'}}>Regístrate aquí</h3>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Control type="text" placeholder="nombre..." name='name'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Control type="text" placeholder="apellido..." name='last_name'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEdad">
        <Form.Control type="number" placeholder="edad" name='edad' />
      </Form.Group>
      <Form.Group className='text-center mt-4' controlId="btn-submit" style={{display:'flex',gap:'20px'}}>
          <Button variant="primary" type="submit">Registrar</Button> 
          <Button variant="primary" onClick={sendTable}>Ver Tabla</Button>
      </Form.Group>
    </Form>
    </div>
  );
}

export default BasicExample;