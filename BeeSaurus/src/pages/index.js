
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function Hero() {
  const logoUrl = useBaseUrl('/img/comeia.png');

  return (
    <section className={styles.hero}>
      <div className={clsx('container', styles.heroInner)}>

        <div className={styles.heroText}>
          <span className={styles.eyebrow}>
            TECNOLOGIA • INOVAÇÃO • RESULTADOS
          </span>

          <Heading as="h1" className={styles.heroTitle}>
            Tecnologia que transforma
            <span> negócios em resultados.</span>
          </Heading>

          <p className={styles.heroSubtitle}>
            Conheça as soluções da BeeCloud e encontre toda a
            documentação necessária para aproveitar o melhor
            das nossas tecnologias.
          </p>

          <div className={styles.buttons}>
            <Link
              className={styles.primaryButton}
              to="/docs/intro"
            >
              Acessar documentação
            </Link>

            <a
              className={styles.secondaryButton}
              href="#produtos"
            >
              Conhecer produtos
            </a>
          </div>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.logoContainer}>
            <img src={logoUrl} alt="Logo BeeCloud" />
          </div>
          <span className={styles.imageCaption}>
            Soluções inteligentes para o seu negócio.
          </span>
        </div>

      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="BeeCloud"
      description="Conheça as soluções e a documentação oficial da BeeCloud."
    >
      <Hero />

      <main>
        <section id="produtos">
          <HomepageFeatures />
        </section>
      </main>
    </Layout>
  );
}
