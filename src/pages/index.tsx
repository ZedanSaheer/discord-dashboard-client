import type { NextPage } from "next";
import { FaDiscord } from "react-icons/fa"
import styles from "../utils/styles/Home.module.scss"

const Home: NextPage = () => {

    const handleLogin = () => {
      //Sends user to our auth redirection page on click
      window.location.href = "http://localhost:5000/api/auth/discord";
    }

  return <div className="page aligned-center">
    <div>
      <button className={styles.button} onClick={handleLogin}>
        <FaDiscord size={30} />
        <span>Login with discord</span></button>
    </div>
  </div>;
};

export default Home;
