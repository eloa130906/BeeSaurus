
// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BeeCloud Docs',
  tagline: 'Documentação dos produtos BeeCloud',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // URL do site
  url: 'https://docs.beecloud.com.br',
  baseUrl: '/',

  organizationName: 'beecloud',
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
        title: 'BeeCloud',
        logo: {
          alt: 'Logo BeeCloud',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentação',
          },
          {to: '/docs/beetalk', label: 'BeeTalk', position: 'left'},
          {to: '/docs/beesign', label: 'BeeSign', position: 'left'},
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Produtos',
            items: [
              {label: 'BeeTalk', to: '/docs/beetalk'},
              {label: 'BeeSign', to: '/docs/beesign'},
            ],
          },
          {
            title: 'Documentação',
            items: [
              {label: 'Introdução', to: '/docs/intro'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BeeCloud. Todos os direitos reservados.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
