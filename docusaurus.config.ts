import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Miso Docs',
  tagline: 'Shopify apps documentation',
  url: 'https://docs.misoapps.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo.svg',

  // Markdown configuration
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'so-sticky-add-to-cart',
        path: 'so-sticky-add-to-cart',
        routeBasePath: 'so-sticky-add-to-cart',
        sidebarPath: './sidebars.ts',
        // ... other options
      },
    ],
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexBlog: false,
        docsRouteBasePath: "/",
        searchContextByPaths: [
          {
            label: "SO: Sticky Add to Cart",
            path: "so-sticky-add-to-cart",
          },
        ],
        hideSearchBarWithNoSearchContext: true,
        explicitSearchResultPath: true,
        language: "en",
        ignoreFiles: [/changelog/],
        // `hashed` is recommended as long-term-cache of index file is possible.
        // hashed: true,
      },
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'Miso Docs',
        logo: {
          alt: 'Miso Apps',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Apps',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'index',
                docsPluginId: 'so-sticky-add-to-cart',
                label: 'SO: Sticky Add to Cart',
              },
            ],
          },
          {
            href: 'https://misoapps.com/',
            label: 'Miso Apps',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Miso Apps, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
