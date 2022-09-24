import sx from "../styles/Book.module.css";

const Book = () => {
  return (
    <div className={`${sx.container} container`}>
      <div className={sx.content}>
        <div className={sx["book-now"]}>
          <h1>Book Now</h1>
          <p>
            To book a haircut, you can reach me using the contact information
            found below.
            <br />
            If possible, please reach out at least a day before the desired
            appointment date.
            <br />
            You can expect a response within that day on booking availability.
          </p>
        </div>

        <div className={sx["book-serv"]}>
          <header>SERVICES</header>
          <ul>
            <li>Gentleman{`'`}s Cut - $25</li>
            <li>Child{`'`}s Cut - $15</li>
            <li>Back n{`'`} Sides - $15</li>
            <li>Hair n{`'`} Beard - $15</li>
            <li>Hair dye - $15</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Book;
