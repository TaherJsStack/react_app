import './InputValidationAlert'

import Alert from 'react-bootstrap/Alert';

const InputValidationAlert = (props) => {

console.log(props)

    return (
        <>
          <Alert variant="danger">
             {props.message}
          </Alert>
        </>
    )

}


export default InputValidationAlert;