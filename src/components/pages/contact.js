import React from 'react';

function ContactPage({ dark }) {
  document.title = "Contact | Kimpton";
  return (
    <>
      <h1 style={{ color: dark ? "#ffffff" : "#000000" }}>Contact:</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <a
          style={{
            color: dark ? "#ffffff" : "#000000",
            fontSize: "32px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
          target="_blank"
          rel="noreferrer"
          href="mailto:kimptondeveloper@gmail.com"
        >
          Email: kimptondeveloper@gmail.com
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          style={{
            color: dark ? "#ffffff" : "#000000",
            fontSize: "32px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
          href="https://wa.me/message/D5A4F4ZLIJSVA1"
        >
          Whatsapp(SMS):+264 81 143 7954
        </a>
      </div>
    </>
  );
}

export default ContactPage;