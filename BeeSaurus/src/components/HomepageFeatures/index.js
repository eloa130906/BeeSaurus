
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Comunicação digital',
    subtitle: '',
    image: '/img/beetalk.png',
    description: (
      <>
        Conecte sua empresa aos clientes pelos canais digitais,
        de forma simples e organizada.
      </>
    ),
  },
  {
    title: 'Assinatura Eletrônica',
    subtitle: '',
    image: '/img/beesign.png',
    description: (
      <>
        Envie, gerencie e acompanhe documentos para assinatura
        eletrônica de forma prática e segura.
      </>
    ),
  },
];

function Feature({ title, subtitle, image, description, to }) {
  return (
    <div className={clsx('col col--6', styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className={styles.featureImage}>
          <img src={image} alt={`Produto ${title}`} />
        </div>

        <div className={styles.featureContent}>
          <Heading as="h3">{title}</Heading>
          <h4>{subtitle}</h4>
          <p>{description}</p>

          {to && (
            <Link
              className="button button--primary button--sm"
              to={to}
            >
              Ver documentação
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section id="produtos" className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span>NOSSAS SOLUÇÕES</span>
          <Heading as="h2">Conheça nossos produtos</Heading>
          <p>
            Soluções inteligentes para simplificar a rotina da sua empresa.
          </p>
        </div>

        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
