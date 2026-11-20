
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'BeeTalk',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'doc',
        id: 'beetalk/intro',
      },
      items: [
        'beetalk/funcionalidades',
        'beetalk/configuracoes',
        'beetalk/perguntas-frequentes',
      ],
    },
    {
      type: 'category',
      label: 'BeeSign',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'doc',
        id: 'beesign/intro',
      },
      items: [
        'beesign/modelos-de-documentos',
        'beesign/assinaturas',
        'beesign/perguntas-frequentes',
      ],
    },
  ],
};

export default sidebars;
