import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { db } from "../../firebaseConfig";
import axios from "axios";

import { StyledForm, Input, Submit, Error } from "./Styled";

import ALert from "./Alert";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [field, setField] = useState("");
  const [error, setError] = useState("");
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const slackInviteLink = `https://join.slack.com/t/checkmateafrica/shared_invite/zt-ipbocwet-osp1wujg56N6ef2r7UV5vQ`

  const mailTemplate = `
  <div style="padding-top: 10px;">
    <h2 style="color: #3F3784" >Checkmate Community</h2>
    <h4 style="margin-bottom: 0" >Hi ${name}</h4>
    <p style="margin-top: 0.4rem; padding: 0 1rem 0 0;">
      Thanks for signing up. Here's your invite link to join our slack virtual workspace. Have fun!
    </p>
    <a href=${slackInviteLink} style="text-decoration: none; color: #fff;">
      <button style="outline: none; margin: .3rem 0 20px; padding: .7rem 1rem; background-color: #3F3784; color: #fff; border: none; border-radius: 2px;">Join Checkmate</button>
    </a>
    <br>

    <small style="margin-top: 4rem; font-size: 11px;">kindly ignore this message if you have joined already</small>
    <br>
    <small style="margin-top: 4rem; font-size: 11px;">© checkmate africa 2020</small>
  </div>
  `;

  const sendMail = () => {
    axios
      .post("https://mailer-api-app.herokuapp.com/api/v1/send/to_one", {
        mail: email,
        message: mailTemplate,
        subject: "Checkmate Invite",
        from: "hello@checkmate.africa",
      })
      .then((res) => console.log(res.data.message))
      .catch((err) => console.log(err));

    // eslint-disable-next-line
  }

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

              // call mail sender function
              sendMail();

              setName("");
              setEmail("");
              setField("");

              setAlert(true);
              setLoading(false);
            }
          })
          .catch((err) => setAlert(`${err}`));
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
        <option value={null} hidden>
          Skill Category *
        </option>

        {[
          "Tech Enthusiast",
          "Frontend Dev",
          "Backend Dev",
          "Mobile Dev",
          "Cloud Engineering",
          "UI/UX Design",
          "Graphics Design",
          "Data Science/Machine Learning",
          "Cyber Security",
          "Fullstack Dev",
          "Technical Writing",
          "Developer Advocate",
          "Tech Daddy/Mummy (Sponsors & Mentors)",
        ].map((option, index) => (
          <option key={index} value={option}>
            {" "}
            {option}{" "}
          </option>
        ))}
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
