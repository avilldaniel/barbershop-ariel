import React from "react";

const book = () => {
  return (
    <div className=".container">
      <h1>Book Now</h1>
      <div className=".content">
        <p>
          To book a haircut, you can reach me using the contact information
          found below.
          <br />- If possible, please reach out at least a day before the
          desired appointment date?
          <br />- You can expect a response within that day on availability?
        </p>
        <section>
          <h5>Pricing:</h5>
          <h2>$25</h2>
        </section>
      </div>
    </div>
  );
};

export default book;
