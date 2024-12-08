import { useState } from "react";
import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Commands() {
  const [prefix, setPrefix] = useState("k!"); // Default prefix

  const handlePrefixChange = (event) => {
    setPrefix(event.target.value); // Update prefix value as user types
  };

  const handlePrefixSubmit = () => {
    alert(`Prefix changed to: ${prefix}`);
    // You can add logic to save the prefix (e.g., API call)
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
              Prefix Management
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>Current Prefix:</kbd> <span className="p-color">{prefix}</span>
                </li>
                <li>
                  <input type="text" value={prefix} onChange={handlePrefixChange} placeholder="Enter new prefix" className="prefix-input" />
                  <button onClick={handlePrefixSubmit} className="prefix-button">
                    Submit
                  </button>
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
