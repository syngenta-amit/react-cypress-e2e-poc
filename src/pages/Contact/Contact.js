import React, { useState } from "react";
import "./Contacts.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Error submitting form", err);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      {submitted ? (
        <p className="success-message" data-cy="contact-success">
          Thank you for your message!
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="contact-form"
          data-cy="contact-form"
        >
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              data-cy="contact-name"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              data-cy="contact-email"
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              data-cy="contact-message"
            />
          </div>
          <button type="submit" data-cy="contact-submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;
