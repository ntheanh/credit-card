import styles from "../style";
import { stats } from "../constants";

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap`}>
      {stats.map((stat) => (
        <div key={stat.id}>
          <h4 className="text-white">{stat.value}</h4>
          <p className="text-gradient">{stat.title}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
