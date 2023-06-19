import styles from "../style";
import stats from "../constants";

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row`}>
      {stats.map((stat) => (
        <div key={stat.id}>
          <h4>{stat.value}</h4>
          <p>{stat.title}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
