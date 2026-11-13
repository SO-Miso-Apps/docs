import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const config: Config = {
  title: 'Miso Docs',
  tagline: 'Shopify apps documentation',
  url: 'https://docs.misoapps.com',
  baseUrl: '/',
  // One URL per page: every page, link and canonical ends in "/".
  trailingSlash: true,
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
    // Cloudflare assets answer a slashless URL with a 307; list a 301 for
    // every page instead so crawlers treat the "/" form as the only one.
    () => ({
      name: 'trailing-slash-redirects',
      async postBuild({ outDir, routesPaths }) {
        const rules = [...new Set(routesPaths)]
          .filter((path) => path.length > 1 && path.endsWith('/'))
          .map((path) => `${path.slice(0, -1)} ${path} 301`);
        await writeFile(join(outDir, '_redirects'), `${rules.join('\n')}\n`);
      },
    }),
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
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'so-llmstxt',
        path: 'so-llmstxt',
        routeBasePath: 'so-llmstxt',
        sidebarPath: './sidebars.ts',
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'so-auto-tags',
        path: 'so-auto-tags',
        routeBasePath: 'so-auto-tags',
        sidebarPath: './sidebars.ts',
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'so-ai-blog-seo',
        path: 'so-ai-blog-seo',
        routeBasePath: 'so-ai-blog-seo',
        sidebarPath: './sidebars.ts',
        // ... other options
      },
    ],
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexBlog: false,
        docsRouteBasePath: '/',
        searchContextByPaths: [
          {
            label: 'SO: Sticky Add to Cart',
            path: 'so-sticky-add-to-cart',
          },
          {
            label: 'SO: AI Blog SEO',
            path: 'so-ai-blog-seo',
          },
        ],
        hideSearchBarWithNoSearchContext: true,
        explicitSearchResultPath: true,
        language: 'en',
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
              {
                type: 'doc',
                docId: 'index',
                docsPluginId: 'so-llmstxt',
                label: 'SO: llms.txt',
              },
              {
                type: 'doc',
                docId: 'index',
                docsPluginId: 'so-auto-tags',
                label: 'SO: Auto Tags | All-in-One',
              },
              {
                type: 'doc',
                docId: 'index',
                docsPluginId: 'so-ai-blog-seo',
                label: 'SO: AI Blog SEO',
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
