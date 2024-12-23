import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react"; // Import useState for managing state

export default function Commands() {
  // State to manage the selected security level
  const [securityLevel, setSecurityLevel] = useState("default");

  // Handler function to update the security level
  const handleSecurityChange = (event) => {
    setSecurityLevel(event.target.value);
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
                  <div className="security-selection">
                    <h2>Security Level Settings</h2>
                    <div className="radio-group">
                      <label>
                        <input type="radio" value="maximum" checked={securityLevel === "maximum"} onChange={handleSecurityChange} />
                        <span>⇢ Maximum</span>
                      </label>
                      <label>
                        <input type="radio" value="default" checked={securityLevel === "default"} onChange={handleSecurityChange} />
                        <span>⇢ Default</span>
                      </label>
                      <label>
                        <input type="radio" value="minimum" checked={securityLevel === "minimum"} onChange={handleSecurityChange} />
                        <span>⇢ Minimum</span>
                      </label>
                    </div>

                    <p>
                      Current Security Level: <strong>{securityLevel}</strong>
                    </p>
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
