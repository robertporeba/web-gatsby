import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

import * as styles from "../styles/home.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Home Page</h2>
          <h3>title</h3>
          <p>content</p>
          <Link className={styles.btn} to="/projects">
            Projects
          </Link>
        </div>
      </section>
    </Layout>
  );
}
