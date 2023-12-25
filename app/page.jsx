import styles from "./page.module.css";
import Link from "next/link"
const Homepage = () => {
  return (
    <div className={styles.container}>
      <h1>
        Hello World,
        <br /> Welcome to my Dashboard
      </h1>
      <Link className={styles.linkStyle} href={"/dashboard"}>
        <button className={styles.button}>Join Now</button>
      </Link>
    </div>
  );
};

export default Homepage;
