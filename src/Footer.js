import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer className="text-center">
        <p>
          This project was coded by{" "}
          <a
            href="https://nadine-damphousse.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Nadine Damphousse
          </a>{" "}
          and is
          <a
            href="https://github.com/ndamph/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            on GitHub
          </a>{" "}
          and hosted on Netlify
        </p>
      </footer>
    </div>
  );
}
