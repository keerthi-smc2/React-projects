import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
// import { useNavigate } from 'react-router-dom';

function Register() {
  // const Navigate = useNavigate();
  const [show, setShow] = useState(false);
  console.log(show);
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = () => {
    console.log("form Submitted");
  };



  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);

  }
  // onClick={handleShow}

  return (
    <>
      <Button onClick = {handleShow} className="m-2" variant="outline-dark" >
        Register
      </Button>

     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>User Name:</label>
        <input type="text" id="username" {...register("username", {
          required: {
             value: true,
             message: 'Username is required'
          }})} />
          <p>{errors.username?.message}</p>

        <label>Email:</label>
        <input type="text" id="email" {...register("email", {
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Invaid email format'
          }
        })} />
        <p>{errors.email?.message}</p>

        <label>Password:</label>
        <input type="password" id="password" {...register("password",{
          pattern: {
            value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            message: 'week password'
          }
        })} />
        <p>{errors.password?.message}</p>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
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

export default Register;