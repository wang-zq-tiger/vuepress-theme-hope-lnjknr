import { hopeTheme } from 'vuepress-theme-hope';
import { zhNavbar } from './navbar/index.js';
import { zhSidebar } from './sidebar/index.js';

const hostname =
  process.env.HOSTNAME || 'https://vuepress-theme-hope-blog-demo.netlify.app';

export default hopeTheme({
  hostname,

  author: {
    name: '孤鹜',
    url: 'https://mrhope.site',
  },

  iconAssets: 'iconfont',

  logo: '/logo.jpg',

  repo: 'vuepress-theme-hope/vuepress-theme-hope',

  docsDir: 'demo/theme-blog/src',

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  blog: {
    medias: {
      Baidu: 'https://example.com',
      Email: 'https://example.com',
      GitHub: 'https://example.com',
      Gmail: 'https://example.com',
      Wechat: 'https://example.com',
      Zhihu: 'https://example.com',
     
    },
  },

  locales: {
    '/': {
       // navbar
       navbar: zhNavbar,

       // sidebar
       sidebar: zhSidebar,
      footer: 'Default footer',

      displayFooter: true,

      blog: {
        description: 'A FrontEnd programmer',
        intro: '/intro.html',
      },

      metaLocales: {
        editLink: 'Edit this page on GitHub',
      },
    },

    /**
     * Chinese locale config
     */
    '/zh/': {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: '默认页脚',

      displayFooter: true,

      blog: {
        description: '走在路上的人儿',
        intro: '/zh/intro.html',
      },

      // page meta
      metaLocales: {
        editLink: '在 GitHub 上编辑此页',
      },
    },
  },

  encrypt: {
    config: {
      '/demo/encrypt.html': ['1234'],
      '/zh/demo/encrypt.html': ['1234'],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      // provider: 'Giscus',
      // repo: 'vuepress-theme-hope/giscus-discussions',
      // repoId: 'R_kgDOG_Pt2A',
      // category: 'Announcements',
      // categoryId: 'DIC_kwDOG_Pt2M4COD69',

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      provider: 'Waline',
      serverURL: 'https://vuepress-theme-hope-comment.vercel.app',
    },

    // Disable features you don't want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      katex: true,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ['ts', 'vue'],
      },
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
      stylize: [
        {
          matcher: 'Recommanded',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommanded',
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vpre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: '/favicon.ico',
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: '/assets/icon/apple-icon-152.png',
        statusBarColor: 'black',
      },
      msTile: {
        image: '/assets/icon/ms-icon-144.png',
        color: '#ffffff',
      },
      manifest: {
        icons: [
          {
            src: '/assets/icon/chrome-mask-512.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-mask-192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        shortcuts: [
          {
            name: 'Demo',
            short_name: 'Demo',
            url: '/demo/',
            icons: [
              {
                src: '/assets/icon/guide-maskable.png',
                sizes: '192x192',
                purpose: 'maskable',
                type: 'image/png',
              },
              {
                src: '/assets/icon/guide-monochrome.png',
                sizes: '192x192',
                purpose: 'monochrome',
                type: 'image/png',
              },
            ],
          },
        ],
      },
    },

    seo:
      hostname === 'https://vuepress-theme-hope.github.io'
        ? {}
        : { canonical: 'https://vuepress-theme-hope.github.io/blog-demo/' },
  },
});
