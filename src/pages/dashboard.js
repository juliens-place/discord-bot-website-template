import { useState } from "react";
import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Commands() {
  const [prefix, setPrefix] = useState("k!"); // Default prefix
  const [isEditing, setIsEditing] = useState(false); // Tracks if the prefix is being edited

  const handlePrefixChange = (event) => {
    setPrefix(event.target.value); // Update the prefix as user types
  };

  const handlePrefixSubmit = () => {
    setIsEditing(false); // Stop editing
    alert(`Prefix updated to: ${prefix}`); // Alert the updated prefix
    // Add logic to save the updated prefix (e.g., API call) if necessary
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handlePrefixSubmit(); // Save the prefix when Enter is pressed
    }
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
                  <kbd>Prefix:</kbd>{" "}
                  {isEditing ? (
                    <input
                      type="text"
                      value={prefix}
                      onChange={handlePrefixChange}
                      onBlur={handlePrefixSubmit} // Save on blur
                      onKeyPress={handleKeyPress} // Save on Enter
                      className="prefix-input"
                      autoFocus
                    />
                  ) : (
                    <span
                      onClick={() => setIsEditing(true)} // Enable editing
                      className="prefix-display"
                    >
                      {prefix}
                    </span>
                  )}
                </li>
                <li>
                  {!isEditing && (
                    <button
                      onClick={() => setIsEditing(true)} // Enable editing
                      className="prefix-button"
                    >
                      Edit Prefix
                    </button>
                  )}
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
