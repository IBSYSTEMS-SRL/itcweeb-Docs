import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          🚀 {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          Documentación técnica para el Desarrollador
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/instalacion/requisitos">
            📖 Ver Documentación
          </Link>
          <Link className="button button--info button--lg" to="docs/instalacion">
            ⚙️ Guía de Instalación
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className="text--center">
              <img src="/img/feature1.svg" alt="Fácil de Usar" className={styles.featureImage} />
            </div>
            <h3>✨ Fácil de Usar</h3>
            <p>Diseñado para ser intuitivo y rápido de aprender.</p>
          </div>
          <div className="col col--4">
            <div className="text--center">
              <img src="/img/feature2.svg" alt="Alta Productividad" className={styles.featureImage} />
            </div>
            <h3>⚡ Alta Productividad</h3>
            <p>Herramientas optimizadas para desarrollo eficiente.</p>
          </div>
          <div className="col col--4">
            <div className="text--center">
              <img src="/img/feature3.svg" alt="Código Abierto" className={styles.featureImage} />
            </div>
            <h3>💡 Código Abierto</h3>
            <p>Completamente extensible y personalizable.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Documentación Oficial"
      description="Encuentra todo lo que necesitas para instalar, aprender y desarrollar con nuestra plataforma.">
      <HomepageHeader />
      <main>
        {/* <FeaturesSection /> */}
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
