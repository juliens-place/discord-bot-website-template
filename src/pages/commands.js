import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Commands() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Klar | Dashboard</title>
        <meta name="description" content="Klar | Commands" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              ⚡ Commands
            </label>
          </header>
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              Utilities
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/shop</kbd> - <span className="p-color">Visit the shop of the server to support it.</span>
                </li>
                <li>
                  <kbd>/claimroles</kbd> - <span className="p-color">Claim roles from department/ affiliated servers.</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              Moderation
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/callsign</kbd> - <span className="p-color">Register/ change and edit call signs.</span>
                </li>
                <li>
                  <kbd>/ban</kbd> - <span className="p-color">Ban members, send them a DM, and redirect them to the appeal server.</span>
                </li>
                <li>
                  <kbd>/punish</kbd> - <span className="p-color">Punish staff members with highly customizable options.</span>
                </li>
              </ul>
            </div>
          </section>
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
