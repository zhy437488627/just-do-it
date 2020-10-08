// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/welcome',
            },
            {
              path: '/welcome',
              name: 'welcome',
              icon: 'smile',
              component: './Welcome',
            },
            {
              path: "/brower",
              name: "brower",
              icon: "crown",
              routes: [
                {
                  path: "/compatibility",
                  name: "compatibility",
                  icon: "smile",
                  component: "knowledge-tree/brower/compatibility"
                },
                {
                  path: "/headless-brower",
                  name: "headless-brower",
                  icon: "smile",
                  component: "knowledge-tree/brower/headless-brower"
                },
                {
                  path: "/how-brower-work",
                  name: "how-brower-work",
                  icon: "smile",
                  component: "knowledge-tree/brower/how-brower-work"
                }, {
                  path: "/webview",
                  name: "webview",
                  icon: "smile",
                  component: "knowledge-tree/brower/webview"
                },
              ],
            },
            {
              path: "/build-tools",
              name: "build-tools",
              icon: "crown",
              routes: [{
                path: "/auto-build",
                name: "auto-build",
                icon: "crown",
                routes: [{
                  path: "/npm",
                  name: "npm",
                  icon: "smile",
                  component: "knowledge-tree/build-tools/auto-build/npm"
                },
                {
                  path: "/gulp",
                  name: "gulp",
                  icon: "smile",
                  component: "knowledge-tree/build-tools/auto-build/gulp"
                }],
              },
              {
                path: "/module-build",
                name: "module-build",
                icon: "crown",
                routes: [{
                  path: "/roll-up",
                  name: "roll-up",
                  icon: "smile",
                  component: "knowledge-tree/build-tools/module-build/roll-up"
                },
                {
                  path: "/webpack",
                  name: "webpack",
                  icon: "smile",
                  component: "knowledge-tree/build-tools/module-build/webpack"
                },],
              },
              ],
            },
            {
              path: "/code-quality",
              name: "code-quality",
              icon: "crown",
              routes: [{
                path: "/coding-specification",
                name: "coding-specification",
                icon: "crown",
                routes: [{
                  path: "/css-style",
                  name: "css-style",
                  icon: "smile",
                  component: "knowledge-tree/code-quality/coding-specification/css-style"
                },
                {
                  path: "/javascript-style",
                  name: "javascript-style",
                  icon: "smile",
                  component: "knowledge-tree/code-quality/coding-specification/javascript-style"
                }],
              }, {
                path: "/inter&formatter",
                name: "inter&formatter",
                icon: "crown",
                routes: [
                  {
                    path: "/eslint",
                    name: "eslint",
                    icon: "smile",
                    component: "knowledge-tree/code-quality/inter&formatter/eslint"
                  },
                ],
              },
              {
                path: "/type-verification",
                name: "type-verification",
                icon: "crown",
                routes: [{
                  path: "/typescript",
                  name: "typescript",
                  icon: "smile",
                  component: "knowledge-tree/code-quality/type-verification/typescript"
                },]
              },
              ],
            }, {
              path: "/css",
              name: "css",
              icon: "crown",
              routes: [{
                path: "/css-frame",
                name: "css-frame",
                icon: "crown",
                routes: [
                  {
                    path: "/antd",
                    name: "antd",
                    icon: "smile",
                    component: "knowledge-tree/css/css-frame/antd"
                  },
                  {
                    path: "/element-ui",
                    name: "element-ui",
                    icon: "smile",
                    component: "knowledge-tree/css/css-frame/element-ui"
                  },
                ],
              }, {
                path: "/css-optimization",
                name: "css-optimization",
                icon: "crown",
                routes: [
                  {
                    path: "/antd",
                    name: "antd",
                    icon: "smile",
                    component: "knowledge-tree/css/css-frame/antd"
                  },
                  {
                    path: "/element-ui",
                    name: "element-ui",
                    icon: "smile",
                    component: "knowledge-tree/css/css-frame/element-ui"
                  },
                ],
              }, {
                path: "/css-optimization",
                name: "css-optimization",
                icon: "smile",
                component: "knowledge-tree/css/css-optimization"
              }, {
                path: "/css-retreatment",
                name: "css-retreatment",
                icon: "crown",
                routes: [
                  {
                    path: "/less",
                    name: "less",
                    icon: "smile",
                    component: "knowledge-tree/css/css-retreatment/less"
                  },
                  {
                    path: "/sass",
                    name: "sass",
                    icon: "smile",
                    component: "knowledge-tree/css/css-retreatment/sass"
                  },
                  {
                    path: "/stylus",
                    name: "stylus",
                    icon: "smile",
                    component: "knowledge-tree/css/css-retreatment/stylus"
                  },
                ],
              },
              {
                path: "/grammer",
                name: "grammer",
                icon: "smile",
                component: "knowledge-tree/css/grammer"
              },
              {
                path: "/layout",
                name: "layout",
                icon: "smile",
                component: "knowledge-tree/css/layout"
              }, {
                path: "/Responsive",
                name: "Responsive",
                icon: "smile",
                component: "knowledge-tree/css/Responsive"
              },]
            }, {
              path: "/data-visualization",
              name: "data-visualization",
              icon: "crown",
              routes: [
                {
                  path: "/antv",
                  name: "antv",
                  icon: "smile",
                  routes: [{
                    path: "/g2",
                    name: "g2",
                    icon: "smile",
                    component: "knowledge-tree/data-visualization/antv/g2"
                  }, {
                    path: "/g2plot",
                    name: "g2plot",
                    icon: "smile",
                    component: "knowledge-tree/data-visualization/antv/g2plot"
                  },]
                }, {
                  path: "/echarts",
                  name: "echarts",
                  icon: "smile",
                  component: "knowledge-tree/data-visualization/echarts"
                }, {
                  path: "/highchart",
                  name: "highchart",
                  icon: "smile",
                  component: "knowledge-tree/data-visualization/highchart"
                },
              ],
            },
            {
              path: "/git",
              name: "git",
              icon: "crown",
              routes: [
                {
                  path: "/grammer",
                  name: "grammer",
                  icon: "smile",
                  component: "knowledge-tree/git/grammer"
                }, {
                  path: "/sourcetree",
                  name: "sourcetree",
                  icon: "smile",
                  component: "knowledge-tree/git/sourcetree"
                },]
            }, {
              path: "/html",
              name: "html",
              icon: "crown",
              routes: [
                {
                  path: "/form",
                  name: "form",
                  icon: "smile",
                  component: "knowledge-tree/html/form"
                },
                {
                  path: "/label",
                  name: "label",
                  icon: "smile",
                  component: "knowledge-tree/html/label"
                },
                {
                  path: "/seo",
                  name: "seo",
                  icon: "smile",
                  component: "knowledge-tree/html/seo"
                },
              ],
            }, {
              path: '/javascript',
              name: 'javascript',
              icon: 'crown',
              routes: [
                {
                  path: "/algorithm",
                  name: "algorithm",
                  icon: "smile",
                  component: "knowledge-tree/javascript/algorithm"
                },
                {
                  path: "/data-type",
                  name: "data-type",
                  icon: "smile",
                  component: "knowledge-tree/javascript/data-type"
                },
                {
                  path: "/event",
                  name: "event",
                  icon: "smile",
                  component: "knowledge-tree/javascript/event"
                },
                {
                  path: "/function",
                  name: "function",
                  icon: "smile",
                  component: "knowledge-tree/javascript/function"
                },
                {
                  path: "/json",
                  name: "json",
                  icon: "smile",
                  component: "knowledge-tree/javascript/json"
                },
                {
                  path: "/variable",
                  name: "variable",
                  icon: "smile",
                  component: "knowledge-tree/javascript/variable"
                },
              ],
            }, {
              path: "/network-knowledge",
              name: "network-knowledge",
              icon: 'crown',
              routes: [
                {
                  path: "/cdn",
                  name: "cdn",
                  icon: "smile",
                  component: "knowledge-tree/network-knowledge/cdn"
                },
                {
                  path: "/dns",
                  name: "dns",
                  icon: "smile",
                  component: "knowledge-tree/network-knowledge/dns"
                },
                {
                  path: "/how-net-work",
                  name: "how-net-work",
                  icon: "smile",
                  component: "knowledge-tree/network-knowledge/how-net-work"
                },
                {
                  path: "/http",
                  name: "http&&https",
                  icon: "smile",
                  component: "knowledge-tree/network-knowledge/http"
                },
              ],
            },
            {
              path: "/node",
              name: "node",
              icon: 'crown',
              routes: [
                {
                  path: "/grammer",
                  name: "grammer",
                  icon: "smile",
                  component: "knowledge-tree/node/grammer"
                },
                {
                  path: "/node-modules",
                  name: "node-modules",
                  icon: "smile",
                  component: "knowledge-tree/node/node-modules"
                },
              ],
            }, {
              path: "/performance",
              name: "performance",
              icon: 'crown',
              routes: [
                {
                  path: "/fcp",
                  name: "fcp",
                  icon: "smile",
                  component: "knowledge-tree/performance/fcp"
                },
                {
                  path: "/fmp",
                  name: "fmp",
                  icon: "smile",
                  component: "knowledge-tree/performance/fmp"
                },
                {
                  path: "/fp",
                  name: "fp",
                  icon: "smile",
                  component: "knowledge-tree/performance/fp"
                },
                {
                  path: "/tti",
                  name: "tti",
                  icon: "smile",
                  component: "knowledge-tree/performance/tti"
                },
              ],
            }, {
              path: "/ssr",
              name: "ssr",
              icon: 'crown',
              routes: [
                {
                  path: "/next-js-react",
                  name: "next-js-react",
                  icon: "smile",
                  component: "knowledge-tree/ssr/next-js-react"
                },
                {
                  path: "/nuxt-js-vue",
                  name: "nuxt-js-vue",
                  icon: "smile",
                  component: "knowledge-tree/ssr/nuxt-js-vue"
                },
              ],
            },{
              path: "/static-site-construction",
    name: "static-site-construction",
              icon: 'crown',
              routes: [
                {
                  path: "/gassbyjs",
                  name: "gassbyjs",
                  icon: "smile",
                  component: "knowledge-tree/static-site-construction/gassbyjs"
                },
                {
                  path: "/vuepress",
                  name: "vuepress",
                  icon: "smile",
                  component: "knowledge-tree/static-site-construction/vuepress"
                },
              ],
            },{
              path: "/test",
    name: "test",
              icon: 'crown',
              routes: [{
                path: "/e2e",
                name: "e2e",
                icon: "smile",
                component: "knowledge-tree/test/e2e"
              },
              {
                path: "/enzyme",
                name: "enzyme",
                icon: "smile",
                component: "knowledge-tree/test/enzyme"
              },
              {
                path: "/integration-testing",
                name: "integration-testing",
                icon: "smile",
                component: "knowledge-tree/test/integration-testing"
              },
              {
                path: "/unit-testing",
                name: "unit-testing",
                icon: "smile",
                component: "knowledge-tree/test/unit-testing"
              },{
                path: "/jest",
                name: "jest",
                icon: "smile",
                component: "knowledge-tree/test/jest"
              },
              ],
            },{
              path: "/vscode",
    name: "vscode",
    icon: "crown",
    component: "knowledge-tree/vscode"
            },
            {
              path: "/webassembly",
              name: "webassembly",
              icon: "crown",
              component: "knowledge-tree/webassembly"
            },
            {
              path: '/admin',
              name: 'admin',
              icon: 'crown',
              component: './Admin',
              routes: [
                {
                  path: '/admin/sub-page',
                  name: 'sub-page',
                  icon: 'smile',
                  component: './Welcome',

                },
              ],
            },
            {
              name: 'list.table-list',
              icon: 'table',
              path: '/list',
              component: './ListTableList',
            },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
