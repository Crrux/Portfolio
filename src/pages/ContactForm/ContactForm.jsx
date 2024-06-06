import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("mleqyapn");
  if (state.succeeded) {
    setTimeout(() => {
      navigate("/");
    }, 2000);
    return (
      <main className="ContactForm_submitted">
        <p>Message sent, thanks !</p>
      </main>
    );
  }
  return (
    <main className="mainContact">
      <form onSubmit={handleSubmit} className="ContactForm">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <label htmlFor="message">Message</label>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </main>
  );
}

function ContactForm() {
  return <Form />;
}

export default ContactForm;
