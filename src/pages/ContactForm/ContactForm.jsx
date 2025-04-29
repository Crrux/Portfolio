import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";

import { useTranslation } from 'react-i18next';


function Form() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("mleqyapn");
  if (state.succeeded) {
    setTimeout(() => {
      navigate("/");
    }, 2000);
    return (
      <main className="ContactForm_submitted">
        <p>{t('contact.success')}</p>
      </main>
    );
  }
  return (
    <main className="mainContact">
      <div className="Form_container">
        <form onSubmit={handleSubmit} className="ContactForm">
          <div className="form-group">
            <label htmlFor="email">{t("contact.email")}</label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Ex.: test@gmail.com"
              autoFocus
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t("contact.message")}</label>

            <textarea
              id="message"
              name="message"
              autoCorrect="on"
              autoComplete="false"
              minLength={10}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            className="form-submit-btn"
            disabled={state.submitting}
          >
            {t("contact.submit")}
          </button>
        </form>
      </div>
    </main>
  );
}

function ContactForm() {
  return <Form />;
}

export default ContactForm;
