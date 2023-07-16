import React from "react";
import Nav from "../Fruits/Nav";
import "./contact.css";
import ContactDetails from "./ContactDetail";

export default function Contact() {
  return (
    <div>
      <Nav />
      <div className="contact-wrap">
        <div className="content-content">
          <ContactDetails />
        </div>
      </div>
    </div>
  );
}
