import { clients } from "../constants";

const Clients = () => {
  return (
    <section>
      <div>
        {clients.map((client) => (
          <div key={client.id}>
            <img src={client.logo} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
