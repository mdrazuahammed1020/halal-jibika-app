import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <main className="contact-content">
    <section className="contact-section">
      <div className="contact-form">
        <h1>Contact With Us</h1>
        <p>Have questions or suggestions? Feel free to reach out to us!</p>
        <form>
          <label for="name">Your Name:</label>
          <input type="text" id="name" name="name" required/>
          
          <label for="email">Your Email:</label>
          <input type="email" id="email" name="email" required/>
          
          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          
          <input type="submit" value="Submit"/>
        </form>
      </div>
      <div class="contact-image">
        <img src="https://www.muslimjobs.io/_next/static/media/interview.11cf277b.svg" alt="Image 1"/>
      </div>
    </section>
  </main>
  )
}

