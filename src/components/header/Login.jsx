import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// import { useNavigate } from 'react-router-dom';

function Login() {
  // const Navigate = useNavigate();
  const [show, setShow] = useState(false);
  console.log(show);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);

  }
  // onClick={handleShow}

  return (
    <>
      <Button onClick = {handleShow} className="m-2" variant="outline-dark" >
        Login
      </Button>

     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Login Email</Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control 
                    type="password"
                    placeholder=""
                    autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Signup
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;