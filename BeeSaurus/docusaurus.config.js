
// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BeeCloud Docs',
  tagline: 'Documentação dos produtos BeeCloud',
  favicon: 'img/favicon.ico',

  // URL do site
url: 'https://eloa130906.github.io',
baseUrl: '/BeeSaurus/',

organizationName: 'eloa130906',
projectName: 'BeeSaurus',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Faixa de anúncio BeeCloud
      announcementBar: {
        id: 'boas-vindas-beecloud',
        content:
          '🐝 <a href="/docs/intro"><b>Documentação BeeCloud</b></a> no ar! BeeTalk e BeeSign já disponíveis 🍯',
        backgroundColor: '#ffc107',
        textColor: '#0d0d0d',
        isCloseable: true,
      },

      image: 'img/logo.svg',

      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },

  
navbar: {
  title: 'Home',
  logo: {
    alt: 'Logo BeeCloud',
    src: 'img/logobee.png',
  },
  items: [
    {
      type: 'docSidebar',
      sidebarId: 'tutorialSidebar',
      position: 'left',
      label: 'Documentação',
    },
    {
      to: '/atualizacoes',
      label: 'Atualizações',
      position: 'left',
    },
  ],
},


      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
