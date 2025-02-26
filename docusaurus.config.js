// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
export default {
  title: "1inch",
  tagline:  "1inch Aggregation protocol",
  favicon: "img/favicon.ico",
  url: "https://docs.1inch.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/undefined/undefined/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "1inch",
      logo: {
        alt: "1inch Logo",
        src: "https://res.cloudinary.com/dfkuxnesz/image/upload/v1740473555/43341157-ezgif.com-gif-maker_bdomk8.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "contractSidebar",
          position: "left",
          label: "Contracts",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};