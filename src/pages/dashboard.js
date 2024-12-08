import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Commands() {
  const [prefix, setPrefix] = useState("k!");

  const handlePrefixChange = (event) => {
    setPrefix(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Prefix set to: ${prefix}`);
    // Add logic here to save the custom prefix
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Klar | Dashboard</title>
        <meta name="description" content="Klar | Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              ⚙️ Dashboard
            </label>
          </header>
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              Coming soon
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>Work in progress</kbd> - <span className="p-color">stay tuned!</span>
                </li>
                <li>
                  <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                    <label htmlFor="prefixInput" className="p-color" style={{ marginRight: "10px" }}>
                      Custom Prefix:
                    </label>
                    <input
                      id="prefixInput"
                      type="text"
                      value={prefix}
                      onChange={handlePrefixChange}
                      className="prefix-input"
                      style={{
                        padding: "4px 8px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        marginRight: "10px",
                      }}
                    />
                    <button
                      onClick={handleSubmit}
                      className="submit-button"
                      style={{
                        padding: "4px 12px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
