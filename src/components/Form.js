import React, { useState } from "react";
import firebase from "../firebase/firebaseConfig";
import styled from "styled-components";

import Button from "../components/Button";

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
`;

const Submit = styled(Button)`
  margin: 0.6rem 0;
`;

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [field, setField] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

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

    console.log("done");
    setName("");
    setEmail("");
    setPhone("");
    setField("");
  };

  return (
    <StyledForm onSubmit={submitForm}>
      <h3>Join Checkmate Community</h3>
      <Input
        type='text'
        placeholder='Your full name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type='email'
        placeholder='Your email address'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type='text'
        placeholder='Phone number'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Input
        as='select'
        placeholder='Select your skillset'
        value={field}
        defaultValue={field}
        onChange={(e) => setField(e.target.value)}
      >
        <option value={null} hidden>Select category</option>
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
    </StyledForm>
  );
};

export default Form;
