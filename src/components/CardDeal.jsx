import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Why choose Manifest...</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Accountability, transparency, and honesty are core values that allow us
        to provide the best service possible. We are here to help you build a
        website that will help you grow your business and reach your goals.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
