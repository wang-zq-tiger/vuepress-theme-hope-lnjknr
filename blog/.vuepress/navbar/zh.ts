import { navbar } from 'vuepress-theme-hope';
import { version } from '../version';

export const zhNavbar = navbar([
  '/',
  {
  text: '测试这条路', 
  icon: 'edit', 
  prefix: '/demo/',
  children: [
    {
      text: '敏捷测试',
      icon: 'edit',
      prefix: 'apple/',
      children: [
        { text: '敏捷测试', icon: 'edit', link: '' },
      ],
    },
    {
      text: '安全测试',
      icon: 'edit',
      prefix: 'apple/',
      children: [
        { text: '安全', icon: 'edit', link: '' },
      ],
    },
    {
      text: '性能测试',
      icon: 'edit',
      prefix: 'apple/',
      children: [
        { text: '性能', icon: 'edit', link: '' },
      ],
    },
    {
      text: '功能测试',
      icon: 'edit',
      prefix: 'apple/',
      children: [
        { text: '功能', icon: 'edit', link: '' },
      ],
    },
    {
      text: '自动化测试',
      icon: 'edit',
      prefix: 'apple/',
      children: [
        { text: '自动化', icon: 'edit', link: '' },
      ],
    },
    {
      text: 'APP测试',
      icon: 'edit',
      prefix: 'apple/',
      children: [
        { text: 'APP', icon: 'edit', link: '' },
      ],
    }
  ] 
  },
  {
    text: '生活这杯酒',
    icon: 'edit',
    prefix: '/posts/',
    children: [
      {
        text: '惊艳了的时光',
        icon: 'edit',
        prefix: 'apple/',
        children: [
          { text: '拾光', icon: 'edit', link: '' },
        ],
      },
      {
        text: '温柔了的岁月',
        icon: 'edit',
        prefix: 'banana/',
        children: [
          {
            text: '流年',
            icon: 'edit',
            link: '1',
          },
        ],
      },
    ],
  },
  {
    text: '读书の笔记',
    icon: 'book',
    prefix: '/book/',
    children: [
      {
        text: 'google测试之道',
        icon: 'edit',
        link: 'google测试之道',
      },
    ],
  },
  {
    text: '文章链接',
    icon: 'link',
    children: [
      {
        text: 'V2 文档',
        link: 'https://vuepress-theme-hope.github.io/v2/zh/',
      },
      {
        text: 'V2 文档案例o',
        link: 'https://vuepress-theme-hope.github.io/docs-demo/zh/',
      },
      {
        text: 'V1 文档',
        link: 'https://vuepress-theme-hope.github.io/v1/zh/',
      },
      {
        text: 'V1 演示',
        link: 'https://vuepress-theme-hope.github.io/v1-demo/zh/',
      },
    ],
  },

]);
