import { useRef } from "react";
import { getHumanReadableNumber } from "../utils/number";
import jsPDF from "jspdf";
import { getPDFHTML } from "../utils/pdf";
import PDF, { Text, AddPage, Line, Image, Table, Html } from "jspdf-react";
import "jspdf-autotable";

const data = [
  {
    company: "OpenAI",
    CEO: "Sam Altman",
    founded: "2015",
    fundrise: 11000000000,
    location: "San Francisco, CA",
    valuation: 27000000000,
    products: ["ChatGPT", "Dall-E"],
    inverstors: ["Microsoft", "Sequoia Capital"],
  },
  {
    company: "Stability AI",
    CEO: "Emad Mostaque",
    founded: "2019",
    fundrise: 111000000,
    location: "London, UK",
    valuation: 1000000000,
    products: ["Stable Diffusion"],
    inverstors: [
      "Coatue Management",
      "Lightspeed Venture Partners",
      "Venture Partners",
      "O'Shaughnessy Ventures",
    ],
  },
  {
    company: "Runway",
    CEO: "Christobal Valenzuela",
    founded: "2018",
    fundrise: 196000000,
    location: "New York, NY",
    valuation: 1000000,
    products: ["RunwayML"],
    inverstors: [
      "Felicis Ventures",
      "Lux Capital",
      "Amplify Partners",
      "Coatue",
      "Compond",
      "Modrona",
    ],
  },
  {
    company: "Huggie Face",
    CEO: "Clement Delangue",
    founded: "2019",
    fundrise: 1600000000,
    location: "New York, NY",
    valuation: 2000000000,
    products: ["Huggie Face"],
    inverstors: [
      "Lux Capital",
      "Sequoia",
      "Coatue",
      "Addition",
      "A. Capital",
      "SV Angel",
      "Betaworks",
    ],
  },
  {
    company: "Cohere",
    CEO: "Aidan Comez",
    founded: "2020",
    fundrise: 420000000,
    location: "Longdon, UK",
    valuation: 2000000000,
    products: ["Cohere"],
    inverstors: [
      "Saleforce Inc.",
      "Nvidia Corp",
      "Index Ventures",
      "Tiger Global Management",
    ],
  },
  {
    company: "Anthropic",
    CEO: "Dario Amodei",
    founded: "2020",
    fundrise: 1000000000,
    location: "San Francisco, CA",
    valuation: 5000000000,
    inverstors: [
      "Spark Capital",
      "Google",
      "Saleforce",
      "Sound Ventures",
      "Zoom Ventures",
    ],
  },
  {
    company: "Character.AI",
    CEO: "Noam Shazeer",
    founded: "2019",
    fundrise: 1930000000,
    location: "Melon Park, CA",
    valuation: 1000000000,
    products: ["Chatbot"],
    inverstors: [
      "Andreessen Horowitz",
      "Nat Friedman",
      "Elad Gil",
      "SV Angel",
      "A. Capital",
    ],
  },
  {
    company: "Midjourney",
    CEO: "David Holz",
    founded: "2019",
    location: "San Francisco, CA",
    valuation: "Unkown",
    products: ["Midjourney"],
    inverstors: ["crowdfunding"],
  },
  {
    company: "Scale AI",
    CEO: "Alex Wang",
    founded: "2016",
    fundrise: 603000000,
    location: "San Francisco, CA",
    valuation: 7300000000,
    products: ["Scale AI"],
    inverstors: [
      "Dragoneer Investment Group",
      "Greenoaks Capital Partners",
      "Tiger Global Management",
    ],
  },
  {
    company: "Abnormal Security",
    CEO: "Evan Reiser",
    founded: "2018",
    fundrise: 2840000000,
    location: "San Francisco, CA",
    valuation: 4000000000,
    inverstors: ["Insight partners", "Greylock Partners", "Menlo Ventures"],
  },
];

function htmlToHTMLElement(html) {
  var template = document.createElement("html");
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template;
}

export default function Top10AIStartups() {
  const reportRef = useRef(null);

  const handlePrintReportClick = () => {
    window.print();
  };

  return (
    <>
      <div ref={reportRef} id="report">
        <h2>
          Which are the top 10 artificial intelligence companies in the world?
        </h2>
        <p>
          In an exciting piece of news, Bloomberg unveiled yesterday their picks
          for the top 10 most promising artificial intelligence startups of the
          year. These companies stand out for their impressive scale, vibrant
          atmosphere, and abundant financial resources. With their
          groundbreaking innovations and dedicated teams, they are poised to
          make significant waves in the world of AI. Stay tuned for updates on
          these trailblazing ventures!
        </p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Company</th>
              <th>CEO</th>
              <th>Location</th>
              <th>Fundrise</th>
              <th>Valuation</th>
              <th>Inverstors</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.company}</td>
                <td>{row.CEO}</td>
                <td>{row.location}</td>
                <td>{getHumanReadableNumber(row.fundrise) || "N/A"}</td>
                <td>{getHumanReadableNumber(row.valuation) || "N/A"}</td>
                <td>{row.inverstors?.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="btn btn-primary d-print-none"
        onClick={handlePrintReportClick}
      >
        Print Report
      </button>
    </>
  );
}
