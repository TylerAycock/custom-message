import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <div className={classes.header}>
      <h1>Logo</h1>
      <div className={classes.links__container}>
        <p>Products</p>
        <p>Contact Us</p>
        <p>About Us</p>
      </div>
    </div>
  );
}

export default MainHeader;
