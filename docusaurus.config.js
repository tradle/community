module.exports = {
  title: 'Community',
  tagline: 'Tradle Hypercore Cloud',
  url: 'https://tradle.io',
  baseUrl: '/community/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon4.ico',
  organizationName: 'tradle', // Usually your GitHub org/user name.
  projectName: 'community', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Tradle',
        src: 'img/tradle-tiny.jpg',
        srcDark: 'img/tradle-tiny-light.png',
      },
      items: [{
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/tradle',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    googleAnalytics: {
      trackingID: 'UA-92678667-1',
    },
    footer: {
      style: 'dark',
      links: [{
          title: 'Links',
          items: [{
              label: 'Tradle',
              to: 'https://tradle.io',
            },
            {
              label: 'Hypercore',
              to: 'https://hypercore-protocol.org/',
            },
          ],
        },
        {
          title: 'Community',
          items: [{
              label: 'Twitter',
              href: 'https://twitter.com/tradles',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/10256363',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/ZS4bX7y',
            },
          ],
        },
        {
          title: 'More',
          items: [{
            label: 'info@tradle.io',
            href: 'mailto:info@tradle.io',
          },
          {
            to: 'docs/About',
            label: 'About this site',
          },
         ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexBlog: false,
      }
    ]
  ],
};