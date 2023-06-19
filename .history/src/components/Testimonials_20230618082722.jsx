import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div />

      <div>
        <h2>
          What people are <br className="sm:block hidden" /> saying about us
        </h2>
      </div>
    </section>
  );
};

export default Testimonials;
