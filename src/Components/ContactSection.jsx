import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactSection = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5ggzl75', 'template_kkm3373', form.current, {
        publicKey: '2nQbn14Ai8zCL_9jF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message Sent Successfully!"); // User feedback
          e.target.reset(); // Clears the inputs
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Failed to send message.");
        },
      );
  };

  return (
    <section id="contact" className="py-12 px-4 relative bg-secondary/40">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out using the form below or connect with me on social media.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="ml-4">
                  <h4 className="font-medium"> Email </h4>
                  <a href="mailto:hpparmar8899@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors">hpparmar8899@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="ml-13">
                  <h4 className="font-medium"> Phone </h4>
                  <a href="tel:+917990124991"
                    className="text-muted-foreground hover:text-primary transition-colors">+91 7990124991</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="ml-8">
                  <h4 className="font-medium"> Location </h4>
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Vadodara, Gujarat, India</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8">
              <h4 className="font-semibold mb-4 text-xl">Contact With Me</h4>
              <div className="flex justify-center space-x-6 mt-7 m">
                <a href="https://www.linkedin.com/in/harsh-parmar-96324624a/" className="hover:text-primary transition-colors" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://github.com/harsh-096" className="hover:text-primary transition-colors" target="_blank">
                  <Github />
                </a>
                <a href="https://www.instagram.com/_harsh_096_" className="hover:text-primary transition-colors" target="_blank">
                  <Instagram />
                </a>
                <a href="https://x.com/Harsh_0960?" className="hover:text-primary transition-colors" target="_blank">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs light-border">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            {/* FORM START */}
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <input type="text" name="name" id="name" required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Harsh Parmar . . . ." />
              </div>

              <div>
                <input type="text" name="email" id="email" required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="example@gmail.com . . . ." />
              </div>

              <div>
                <textarea name="message" id="message" required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Hi! I wanted to know you that . . . ." />
              </div>

              <button type="submit" className="cosmic-btn w-full flex justify-center gap-2">
                Send Message
                <Send size={16} />
              </button>
            </form>
            {/* FORM END */}

          </div>
        </div>
      </div>
    </section>
  )
}