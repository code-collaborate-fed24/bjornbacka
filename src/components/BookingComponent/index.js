import React from "react";
import "./booking.css";
import { useState } from "react";
import { send } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Index() {
  const [toSend, setToSend] = useState({
    from_name: "",
    from_lastname: "",
    reply_to: "",
    contact_number: "",
    message: "",
  });

  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const enteredEmailIsValid = toSend.reply_to.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  let formIsValid = false;

  if (enteredEmailIsValid) {
    formIsValid = true;
  }

  const emailInputClasses = emailInputIsInvalid
    ? "form--input--invalid"
    : "form--input";

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    // Validating on every keystroke
  };

  // Validating on losing input focus
  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true);
  };

  const notify = () => {
    toast.success("Your message has been sent!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnteredEmailTouched(true);

    // Validation on submit
    if (!enteredEmailIsValid) {
      console.log("no email");
      return;
    }

    send("service_ohtz0p3", "template_c0diklg", toSend, "T6wzblfm_Kra5B7vD")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        notify();
        setToSend({
          from_name: "",
          from_lastname: "",
          reply_to: "",
          contact_number: "",
          message: "",
        });
        setEnteredEmailTouched(false);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <div className="contact-card">
      <div className="contact-details"></div>
      <form onSubmit={handleSubmit}>
        <div className="form-inputs">
          <input
            type="text"
            name="from_name"
            placeholder="Förnamn"
            value={toSend.from_name}
            onChange={handleChange}
            className="form--input"
          />
          <input
            type="text"
            name="from_lastname"
            placeholder="Efternamn"
            value={toSend.from_lastname}
            onChange={handleChange}
            className="form--input"
          />
          <input
            type="email"
            name="reply_to"
            placeholder="E-post"
            value={toSend.reply_to}
            onChange={handleChange}
            onBlur={emailInputBlurHandler}
            className={emailInputClasses}
          />
          <input
            type="text"
            name="contact_number"
            placeholder="Telefon"
            value={toSend.contact_number}
            onChange={handleChange}
            className="form--input"
          />
          <textarea
            rows="6"
            type="text"
            name="message"
            placeholder="Meddelande"
            value={toSend.message}
            onChange={handleChange}
            className="form--message"
          />
        </div>
        <button disabled={!formIsValid} className="form--button">
          Boka
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}
