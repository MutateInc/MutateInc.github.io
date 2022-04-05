// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Mutate",
  tagline: "Dinosaurs are cool",
  url: "https://Mutate.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "MutateInc", // Usually your GitHub org/user name.
  projectName: "manual-de-operaciones", // Usually your repo name.
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/MutateInc/manual-de-operaciones/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/MutateInc/manual-de-operaciones/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Mutate Logo",
          src: "img/logo_name.png",
          srcDark: "img/logo_name_dark.png",
          href: "/",
        },
        items: [
          {
            type: "doc",
            docId: "welcome",
            position: "left",
            label: "Documentos",
          },
          { to: "/blog/welcome", label: "Minutas", position: "left" },
          {
            href: "https://github.com/MutateInc",
            label: "GitHub",
            position: "right",
          }
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
          },
          {
            title: "Community",
            items: [
              // {
              //   label: "Twitter",
              //   href: "https://twitter.com/docusaurus",
              // },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Minutas",
                to: "/blog/welcome",
              },
              {
                label: "GitHub",
                href: "https://github.com/MutateInc/manual-de-operaciones",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mutate, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
