import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import firebase from "../firebase/firebaseConfig";
import styled from "styled-components";

import Container from "../components/Container";
import Button from "../components/Button";
import ALert from "../components/Alert";

const StyledForm = styled.form`
  width: 60%;
  box-sizing: border-box;

  @media (max-width: 875px) {
    width: 99%;
  }

  & h3 {
    color: #383e56;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.7rem 1rem;
  margin: 0.6rem 0;
  box-sizing: border-box;
  border: 1px solid #efefef;
  outline: none;
  -webkit-appearance: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const Submit = styled(Button)`
  margin: 0.6rem 0;
`;

const Error = styled(Container)`
  margin: 0.6rem 0;
  background-color: #fff3cd;
  color: #8c6c10;

  & span {
    margin: 0 0.5rem 0 0;
    padding: 0;
  }

  & p {
    margin: 0;
  }
`;

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [field, setField] = useState("");

  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);
  const [completed, setCompleted] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    if ([name, email, phone, field].includes("")) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      const db = firebase.firestore();

      db.settings({
        timestampsInSnapshots: true,
      });

      const userRef = db.collection("users").add({
        name,
        email,
        phone: `+234${phone.slice(1, 11)}`,
        field,
      });

      setName("");
      setEmail("");
      setPhone("");
      setField("");

      setAlert(true);
    }
  };

  return (
    <StyledForm onSubmit={submitForm}>
      <h3>Join Checkmate Community</h3>

      {error && (
        <Error justify='flex-start' align='center' padding='.5rem 1rem'>
          <span className='material-icons'>error_outline</span>
          <p>Please fill all fields</p>
        </Error>
      )}

      <Input
        required
        type='text'
        placeholder='Your full name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        required
        type='email'
        placeholder='Your email address'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        required
        type='number'
        placeholder='Phone number (080...)'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Input
        required
        as='select'
        placeholder='Select your skillset'
        value={field}
        defaultValue={field}
        onChange={(e) => setField(e.target.value)}
      >
        <option value={null} hidden>
          Select category
        </option>
        <option value='Tech Enthusiast'>Tech Enthusiast</option>
        <option value='Frontend'>Frontend</option>
        <option value='Backend'>Backend</option>
        <option value='UI/UX Design'>UI/UX Design</option>
        <option value='Graphics Design'>Graphics Design</option>
        <option value='Technical Writing'>Technical Writing</option>
        <option value='Developer Advocate'>Developer Advocate</option>
      </Input>
      <Submit type='submit' full>
        Sign Up
      </Submit>

      {alert && <ALert alert={setAlert} completed={setCompleted} />}
      {completed && <Redirect to='/' />}
    </StyledForm>
  );
};

export default Form;
