// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '大杂烩 MC 服务器',
  tagline: '一个原版 1.20.4 生存服务器 IP:dazahui.chat',
  favicon: 'img/icon.png',

  // Set the production url of your site here
  url: 'https://APeng215.github.io/dazahui-server-web',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'APeng215', // Usually your GitHub org/user name.
  projectName: 'dazahui-server-web', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
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
        title: '大杂烩',
        logo: {
          alt: 'My Site Logo',
          src: 'img/icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '服务器',
          },
          {
            href: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=1N6yUa-DsM88XqTATTEwhi8ERcMsahZf&authKey=at5bFQFgEi%2FzvxsvreLBk30ueXVhfeDjnl1UGNyJlNxGEDEIvhVHiWqVecYVAauV&noverify=0&group_code=796500922',
            label: 'QQ群',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '服务器信息',
                to: '/docs/server-introduction',
              },
            ],
          },
          {
            title: '社群',
            items: [
              {
                label: 'QQ群',
                href: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=1N6yUa-DsM88XqTATTEwhi8ERcMsahZf&authKey=at5bFQFgEi%2FzvxsvreLBk30ueXVhfeDjnl1UGNyJlNxGEDEIvhVHiWqVecYVAauV&noverify=0&group_code=796500922',
              },
            ],
          },
          {
            title: '其他',
            items: [
              {
                label: '本服没有南桐',
                href: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=1N6yUa-DsM88XqTATTEwhi8ERcMsahZf&authKey=at5bFQFgEi%2FzvxsvreLBk30ueXVhfeDjnl1UGNyJlNxGEDEIvhVHiWqVecYVAauV&noverify=0&group_code=796500922',
              },
              // {
              //   label: 'GitHub',
              //   href: 'https://github.com/facebook/docusaurus',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DaZaHui, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
