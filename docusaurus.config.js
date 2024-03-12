// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PixelByte Blog',
  tagline: 'PixelByte',
  favicon: 'img/favicon.ico',

  url: 'https://blog.pixelbyte.dev',
  baseUrl: '/',
  
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


presets: [
  [
    'classic',
    {
      blog: {
        showReadingTime: true,
        routeBasePath: '/',
        blogSidebarTitle: 'All our posts',
        blogTitle: 'PixelByte Blog',
        blogDescription: 'All of our blogs',
        blogListComponent: '@theme/BlogListPage',
        blogPostComponent: '@theme/BlogPostPage',
        blogTagsListComponent: '@theme/BlogTagsListPage',
        blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
      },
      theme: {
        customCss: './src/css/custom.css',
      },
      docs: false, // Disable documentation
    },
  ],
],

plugins: [
  [
    '@docusaurus/plugin-google-gtag',
    {
      trackingID: 'G-NLB913Y7GH',
      anonymizeIP: true,
    },
  ],
  'docusaurus-plugin-google-adsense',
],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
       },
    googleAdsense: {
      dataAdClient: 'ca-pub-5359121068901538',
    },
      navbar: {
        title: 'PixelByte Blog',
        items: [
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} PixelByte.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};
export default config;
