import { FormEvent, FormEventHandler, useState } from "react";

const Contact = () => {
  const [msgSent, setMsgSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // API to send email

    // Render confirmation
    setMsgSent(true);
  };

  return (
    <div className=".container">
      <h1>Contact Me</h1>

      <div className=".content">
        {/* Contact form */}
        {!msgSent ? (
          <div>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Name *" />
              <input type="text" placeholder="Email *" />
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="Message *" />
              <button type="submit">Send</button>
            </form>
          </div>
        ) : (
          <div>
            <p>Message sent!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
