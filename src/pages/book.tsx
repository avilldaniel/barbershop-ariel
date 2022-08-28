import React from "react";
import sx from "../styles/Book.module.css";

const book = () => {
  return (
    <div className={sx.container}>
      <div className={sx.content}>
        <div className={sx["book-now"]}>
          <h1>Book Now</h1>
          <p>
            To book a haircut, you can reach me using the contact information
            found below.
            <br />- If possible, please reach out at least a day before the
            desired appointment date?
            <br />- You can expect a response within that day on availability?
          </p>
        </div>

        {/* <section className={sx.pricing}>
          <p>Pricing:</p>
          <h2>$25</h2>
        </section> */}
        <div className={sx["book-serv"]}>
          <header>SERVICES</header>
          <ul>
            <li>Gentleman{`'`}s Cut - $25</li>
            <li>Child{`'`}s Cut - $</li>
            <li>Back n{`'`} Sides - $</li>
            <li>Hair n{`'`} Beard - $</li>
            <li>Hair dye - $</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default book;
