import { MagnifyingGlass, Question } from "@phosphor-icons/react";
import annoucementLogo from "../../assets/announcement.svg";
import downLogo from "../../assets/down.svg";
import styles from "./navbar.module.css";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div>
          <h4>Payouts</h4>
        </div>
        <div className={styles.left_question}>
          <div>
            <Question size={16} />
          </div>
          <div className={styles.left_question_text}>
            <p className="subtitle">How it works</p>
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <MagnifyingGlass size={16} />
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className={styles.center_input}
        />
      </div>
      <div className={styles.right}>
        <div>
          <img src={annoucementLogo} alt="announcement" />
        </div>
        <div>
          <img src={downLogo} alt="announcement" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
