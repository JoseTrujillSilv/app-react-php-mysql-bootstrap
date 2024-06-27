import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

function FormTrue() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('http://localhost/app-react/src/back/getForm.php');
        const data = await response.json();
        setTableData(data);
    };

    fetchData();
  }); // Empty dependency array: fetch data only once on component mount

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px', height: '100vh' }}>
        <div style={{ width: '400px' }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Edad</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.nombre}</td>
                  <td>{item.apellido}</td>
                  <td>{item.edad}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default FormTrue;
