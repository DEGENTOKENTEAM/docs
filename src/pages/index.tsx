import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.scss";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary"
            to="/ecosystem/overview#what-is-degenx"
          >
            What is DegenX?
          </Link>
          <Link
            className="button button--secondary"
            to="/ecosystem/overview#what-is-dgnx"
          >
            What is DGNX?
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className={styles.buttonsCenter}>
          <Link
            className="button button--primary"
            to="/ecosystem/overview#what-is-degenx"
          >
            What is DegenX?
          </Link>
          <Link
            className="button button--primary"
            to="/ecosystem/overview#what-is-dgnx"
          >
            What is DGNX?
          </Link>
        </div>
      </main>
    </Layout>
  );
}
