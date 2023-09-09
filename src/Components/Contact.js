import './style.css'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ru1z75i', 'template_7tqhtpt', form.current, 'MhyeJv7yiYY6H4PU9')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id='contact'>
      <h1 className='contact-heading'>Contact Me</h1>
      <span className="contact-desc"></span>
      <form  className="contact-form" ref={form} onSubmit={sendEmail}>
        <input type="text" className="contact-name" placeholder='Enter your name' name='your_name'/>
        <input type="email" className="email" placeholder='Enter your email' name='your_email' />
        <textarea name="message"  cols="30" rows="10" className='msg' placeholder='Enter your message here'></textarea>
        <button type='submit' value='Send' className="submit-btn" name='message'>Submit</button>
      </form>
    </div>
  )
}

export default Contact