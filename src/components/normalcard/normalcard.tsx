import { CaretRight, Question } from "@phosphor-icons/react";
import styles from "./normalcard.module.css";

type Props = {
    numberOfOrders: string;
    price: string;
    cardTopName: string;
};

const NormalCard = (props: Props) => {
    const { numberOfOrders, price, cardTopName } = props;

    return (
      <div className={styles.card}>
        <div className={styles.card_top}>
          <h5>{cardTopName}</h5>
          <Question size={16} />
        </div>
        <div className={styles.card_bottom}>
          <div className={styles.card_bottom_left}>
            <h3>₹{price}</h3>
            {numberOfOrders === "0" ? null : (
              <div className={styles.card_bottom_left_card}>
                <p>{numberOfOrders} orders</p>
                <CaretRight size={16} />
              </div>
            )}
            
          </div>
        </div>
      </div>
    );
};

export default NormalCard;
