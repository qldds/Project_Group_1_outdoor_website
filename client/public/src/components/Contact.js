import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    .then(res => res.json())
    .then(data => alert(data.message))
    .catch(err => console.error(err));
  };

  return (
    <div className="page">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required/>
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required/>
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required/>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
