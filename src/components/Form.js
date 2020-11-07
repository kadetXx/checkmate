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
    font-size: 1.1rem;
  }

  & p {
    margin: 0;
    font-size: 0.8rem;
  }

  & small {
    display: none;
  }
`;

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [field, setField] = useState("");
  const [error, setError] = useState("");
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    const intlPhone = /\+[1-9][0-9]{9,13}/;

    if ([name, email, field].includes("")) {
      setError("Please fill required fields");
    } else if (phone !== "" && phone.length < 8) {
      setError("Enter valid phone number or leave blank");
    } else if (phone !== "" && intlPhone.test(phone) === false) {
      setError("Please use intl format for phone, no spaces");
    } else {
      setLoading(true);

      setTimeout(() => {
        const db = firebase.firestore();
        const registeredUsers = [];

        db.collection("users")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              registeredUsers.push(doc.data().email.toString());
            });
          })
          .then(() => {
            if (registeredUsers.includes(email.toString())) {
              setError("This email is already registered");
              setLoading(false);
            } else {
              db.settings({
                timestampsInSnapshots: true,
              });

              // eslint-disable-next-line
              const userRef = db.collection("users").add({
                name,
                email,
                phone: phone === "" ? "Unavailable" : phone,
                field
              });

              setName("");
              setEmail("");
              setPhone("");
              setField("");

              setAlert(true);
              setLoading(false);
            }
          });
      }, 2000);
    }
  };

  return (
    <StyledForm onSubmit={submitForm}>
      <h3>Join Checkmate Community</h3>

      {error !== "" && (
        <Error justify='flex-start' align='center' padding='.7rem 1rem'>
          <span className='fas fa-exclamation-circle'></span>
          <p> {error} </p>

          <small>
            {setTimeout(() => {
              setError("");
            }, 3000)}
          </small>
        </Error>
      )}

      <Input
        type='text'
        placeholder='Your full name *'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type='email'
        placeholder='Your email address *'
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
        onChange={(e) => setField(e.target.value)}
      >
        <option value={null} hidden>
          Skill Category *
        </option>
        <option value='Tech Enthusiast'>Tech Enthusiast</option>
        <option value='Frontend'>Frontend Dev</option>
        <option value='Backend'>Backend Dev</option>
        <option value='Mobile'>Mobile Dev</option>
        <option value='Cloud'>Cloud Engineering</option>
        <option value='UI/UX Design'>UI/UX Design</option>
        <option value='Graphics Design'>Graphics Design</option>
        <option value='Data science/Machine learning'>
          Data Science/Machine Learning
        </option>
        <option value='Technical Writing'>Technical Writing</option>
        <option value='Developer Advocate'>Developer Advocate</option>
        <option value='Sponsor'>Tech Daddy/Mummy (Sponsors & Mentors)</option>
      </Input>
      <Submit type='submit' full>
        {loading ? "Please wait..." : "Sign Up"}
      </Submit>

      {alert && <ALert alert={setAlert} completed={setCompleted} />}
      {completed && <Redirect to='/' />}
    </StyledForm>
  );
};

export default Form;
