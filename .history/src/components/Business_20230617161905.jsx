import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const Business = () => {
  return (
    <section className={`${layout.section}`}>
      <div>
        <h2 className="text-white">
          You do the business,
          <br className="sm:block hidden" />
          we’ll handle the money.
        </h2>
        <p className="max-w-[470px]">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <div>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Business;
