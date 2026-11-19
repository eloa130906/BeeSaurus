
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'BeeTalk',
    image: '/img/beetalk.png',
    description:
      'Encontre informações, manuais e orientações sobre o uso da plataforma BeeTalk.',
    to: '/docs/beetalk/intro',
  },
  {
    title: 'BeeSign',
    image: '/img/beesign.png',
    description:
      'Consulte documentações, procedimentos e orientações sobre a plataforma BeeSign.',
    to: '/docs/beesign/intro',
  },
];

function Feature({ title, image, description, to }) {
  const imageUrl = useBaseUrl(image);

  return (
    <div className="col col--6">
      <Link
        to={to}
        className={styles.featureLink}
      >
        <div className={styles.featureCard}>

          <div className={styles.featureImage}>
            <img src={imageUrl} alt={`Logo ${title}`} />
          </div>

          <div className={styles.featureContent}>
            <Heading as="h3">{title}</Heading>

            <p>{description}</p>

            <span className={styles.featureAction}>
              Acessar documentação
              <span> →</span>
            </span>
          </div>

        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section id="produtos" className={styles.features}>
      <div className="container">

        <div className={styles.sectionHeader}>
          <span>NOSSOS PRODUTOS</span>

          <Heading as="h2">
            Escolha uma documentação
          </Heading>

          <p>
            Selecione o produto que deseja consultar
            e acesse sua central de informações.
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
