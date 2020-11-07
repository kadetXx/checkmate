import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {db} from "../../firebaseConfig";

import { StyledForm, Input, Submit, Error } from './Styled'

import ALert from "./Alert";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [field, setField] = useState("");
  const [error, setError] = useState("");
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);


  const submitForm = (e) => {
    e.preventDefault();

    if ([name, email, field].includes("")) {
      setError("Please fill required fields");
    } else {
      setLoading(true);

      setTimeout(() => {

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
                field,
              });

              setName("");
              setEmail("");
              setField("");

              setAlert(true);
              setLoading(false);
            }
          })
          .catch(err => setAlert(`${err}`));
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
        as='select'
        placeholder='Select your skillset'
        value={field}
        onChange={(e) => setField(e.target.value)}
      >
        <option value={null} hidden>Skill Category *</option>

        {
          [
            "Tech Enthusiast",
            "Frontend Dev",
            "Backend Dev",
            "Mobile Dev",
            "Cloud Engineering",
            "UI/UX Design",
            "Graphics Design",
            "Data Science/Machine Learning",
            "Technical Writing",
            "Developer Advocate",
            "Tech Daddy/Mummy (Sponsors & Mentors)",
          ].map((option, index) => (
            <option key={index} value={option}> {option} </option>
          ))
        }
        
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
