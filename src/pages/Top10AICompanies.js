import SpiderPieChart from "../components/lab/SpiderPieChart";
import { useEffect, useState } from "react";

const data = [
  {
    name: "Google",
    revenue: 284.61,
    services: "Search Engine, Social Media, Cloud, Office",
  },
  {
    name: "Facebook",
    revenue: 117.34,
    services: "Social Media, Comsumer Electronic, Game",
  },
  { name: "Amazon", revenue: 524.89, services: "Ecommerce, Cloud" },
  {
    name: "Microsoft",
    revenue: 207.59,
    services: "Operation System, Office, Cloud, Game",
  },
  {
    name: "Apple",
    revenue: 385.09,
    services: "Comsumer Electronic, Finance, Game, Media",
  },
  { name: "IBM", revenue: 60.58, services: "Business" },
  { name: "Intel", revenue: 56.41, services: "Hardware" },
  { name: "Alibaba", revenue: 125.98, services: "Ecommerce, Finance, Cloud" },
  { name: "Oracle", revenue: 47.95, services: "Database" },
  { name: "Samsung", revenue: 218.04, services: "Comsumer Electronic" },
];

export default function Top10AICompanies() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    console.log("effect");
    const newServices = [];
    function addService(service) {
      const serviceItem = newServices.find(({ type }) => type === service);
      if (serviceItem) {
        serviceItem.value++;
      } else {
        newServices.push({ type: service, value: 1 });
      }
    }

    data.map(({ services }) =>
      services.split(",").map((service) => addService(service.trim()))
    );

    console.log(services);
    setServices(newServices);
  }, []);

  return (
    <div className="container">
      <h1>Top 10 AI Companies</h1>
      <p>
        OpenAI GPT suggested following list of the top 10 AI companies in the
        world.
      </p>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Revenue</th>
            <th>Services</th>
          </tr>
        </thead>
        <tbody>
          {data
            .sort((a, b) => b.revenue - a.revenue)
            .map(({ name, revenue, services }) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{revenue}</td>
                <td>{services}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <div>
        <ul className="list-group border border-0 small">
          <li className="list-group-item border border-0 py-0 text-muted">
            * Revenue in billions of US dollars in TTM, as of 2023
          </li>
          <li className="list-group-item border border-0 py-0 text-muted">
            * Reference:{" "}
            <a
              href="https://companiesmarketcap.com/"
              target="_blank"
              rel="noreferrer"
            >
              https://companiesmarketcap.com/
            </a>
          </li>
        </ul>
      </div>

      <p>
        If we analyse by their main services, here is the table with pie chart:
      </p>
      <SpiderPieChart data={services} />
      <table className="table">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {services
            .sort((a, b) => b.value - a.value)
            .map(({ type, value }) => (
              <tr key={type}>
                <td>{type}</td>
                <td>{value}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
