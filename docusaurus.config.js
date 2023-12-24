// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OFICINA WINRAR',
  tagline: 'Tudo o que necessita ao seu dispor o mais rápido possível.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/TP3/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'a70563', // Usually your GitHub org/user name.
  projectName: 'TP3', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OFICINAWINRAR',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Oficina',
          },
          {to: '/blog', label: 'Sobre Nós', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Serviços',
            items: [
              {
                label: 'Cortesia',
                to: '/docs/Serviços/Cortesia',
              },
              {
                label: 'Reparação',
                to: '/docs/Revisão/Marcação',
              },
            ],
          },
          {
            title: 'Preçário',
            items: [
              {
                  label: 'Cortesia',
                  to: '/docs/Preçário/Cortesia',
              },
              {
                label: 'Reparação',
                to: '/docs/Preçário/Reparação/Elétrica',
              },
            ],
          },
          {
            title: 'Recrutamento',
            items: [
              {
                  label: 'Emprego',
                  to: '/docs/Recrutamento/Emprego',
              },
              {
                label: 'Estágio',
                to: '/docs/Recrutamento/Estágio',
              },
            ],
          },
          {
            title: 'Info',
            items: [
              {
                label: 'Quem Somos',
                to: 'QuemSomos',
              },
              {
                label: 'Contactos',
                to: 'Contactos',
              },
              {
                label: 'Sede Oficina ',
                href: 'https://www.google.com/search?q=37.011698987033604%2C+-7.921883972344417&rlz=1C1ONGR_pt-PTPT1017PT1017&oq=37.011698987033604%2C+-7.921883972344417&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg70gEHMTkxajBqNKgCALACAA&sourceid=chrome&ie=UTF-8',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OFICINA WINRAR, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
