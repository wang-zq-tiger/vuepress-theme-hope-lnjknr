import { defineUserConfig } from '@vuepress/cli';
import theme from './theme.js';

const base = <'/' | `/${string}/`>process.env.BASE || '/';

export default defineUserConfig({
  base,

  dest: './dist',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: '秋水长天',
      description: '落霞与孤鹜齐飞，秋水共长天一色',
    }
   
  },

  theme,

  shouldPrefetch: false,
});
