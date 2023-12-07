import React, { useState } from 'react'

import Table from 'react-bootstrap/Table';

function ItemsList(props) {

    console.log('element =>', props.list)

    const [title, setTitle] = useState(props.list[0].title)

    const btnAction = () => {
      setTitle('Update.....')
      console.log(props.list[0].title)
    }


    return (
     <>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Controls</th>
                </tr>
            </thead>
            <tbody>
   
                <tr>
                  <td>1</td>
                  <td>{title}</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <button onClick={ btnAction }>action 1</button>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>{title}</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>
                    <button onClick={ btnAction}>action 2</button>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>{title}</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>
                    <button onClick={ btnAction}>action 3</button>
                  </td>
                </tr>


            </tbody>
        </Table>
     </>
    );
  }
  
  export default ItemsList;
  