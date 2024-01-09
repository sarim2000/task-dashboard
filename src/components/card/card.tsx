import { CaretRight, Question } from "@phosphor-icons/react";
import styles from "./card.module.css";


const Card = () => {
  return (
    // create a card that is rectangular where in top its wirtten Next payout and then the next row contains price and number of orders and below that date and time
    <div className={styles.card}>
      <div className={styles.card_top}>
        <h5>Next payout</h5>
        <Question size={16} />
      </div>
      <div className={styles.card_bottom}>
        <div className={styles.card_bottom_left}>
          <h3>₹2200.00</h3>
          <div className={styles.card_bottom_left_card}>
            <p>0 orders</p>
            <CaretRight size={16} />
          </div>
        </div>
      </div>
      <div className={styles.card_bottom_right}>
        <div className={styles.card_bottom_right_content}>
            <p>Next Payout Date:</p>
            <p>Today, 4:00PM</p>
        </div>
      </div>
    </div>
  );
}

export default Card