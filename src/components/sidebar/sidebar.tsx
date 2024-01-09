import { CaretDown } from "@phosphor-icons/react";
import analytics from "../../assets/analytics.svg";
import appearance from "../../assets/appearance.svg";
import audience from "../../assets/audience.svg";
import deliverylogo from "../../assets/delivery.svg";
import discount from "../../assets/discount.svg";
import logo from "../../assets/home.svg";
import marketing from "../../assets/marketing.svg";
import orderslogo from "../../assets/orders.svg";
import payout from "../../assets/payouts.svg";
import plugins from "../../assets/plugins.svg";
import products from "../../assets/products.svg";
import wallettlogo from "../../assets/wallet.svg";
import styles from "./sidebar.module.css";


const Sidebar = () => {
  const cards = [
    { logo: logo, title: "Home" },
    { logo: orderslogo, title: "Orders" },
    { logo: products, title: "Products" },
    { logo: deliverylogo, title: "Delivery" },
    { logo: marketing, title: "Marketing" },
    { logo: analytics, title: "Analytics" },
    { logo: payout, title: "Payout" },
    { logo: discount, title: "Discount" },
    { logo: audience, title: "Audience" },
    { logo: appearance, title: "Appearance" },
    { logo: plugins, title: "Plugins" },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <div className={styles.top_section}>
          <div className={styles.top_section_left}>
            <div className={styles.top_section_left_logo}></div>
            <div className={styles.top_section_left_title}>
              <div>
                <p className="text-small">Nishyan</p>
              </div>
              <div>
                <p className={`small subtitle ${styles.subtitle_text}`}>
                  Visit Store
                </p>
              </div>
            </div>
          </div>
          <div className={styles.top_section_right}>
            <CaretDown size={16} />
          </div>
        </div>
        <div className={styles.main_section}>
          <div className={styles.main_section_top}>
            {cards.map((card, index) => (
              <div className={styles.main_section_top_card} key={index}>
                <div className={styles.main_section_top_card_logo}>
                  <img src={card.logo} alt="home" />
                </div>
                <div className={styles.main_section_top_card_title}>
                  <p className="text-small">{card.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.main_section_bottom}>
            <div className={styles.main_section_bottom_card}>
              <div className={styles.main_section_bottom_card_logo}>
                <img src={wallettlogo} alt="wallet" />
              </div>
              <div className={styles.main_section_bottom_card_text}>
                <p className={`${styles.main_section_bottom_card_text_title}`}>
                  Available credits
                </p>
                <p className="text-small">222.10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
