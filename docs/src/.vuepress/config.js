const { description } = require("../../../package");
const path = require("path");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Vuepress Docs Boilerplate",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Config",
        link: "/config/",
      },
      {
        text: "Components",
        link: "/components/",
      },
      {
        text: "VuePress",
        link: "https://v1.vuepress.vuejs.org",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: ["", "using-vue"],
        },
      ],
      "/components/": [
        {
          title: "Components",
          collapsable: false,
          children: ["", "hello-world"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    ["live", { noSsr: true }],
    [
      "vuepress-plugin-typescript",
      {
        tsLoaderOptions: {
          transpileOnly: false,
          compilerOptions: {},
        },
      },
    ],
  ],

  dest: path.resolve(process.cwd(), "dist"),

  base: "/vue-testpress/",

  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(process.cwd(), "src"),
      },
    },
  },

  chainWebpack: (config) => {
    /**
     * Support tsx: https://github.com/vuejs/vuepress/issues/2893
     */
    config.resolve.extensions.add(".tsx");

    config.module
      .rule("tsx")
      .test(/\.tsx$/)
      .use("cache-loader")
      .loader(require.resolve("cache-loader"))
      .end()
      .use("ts-loader")
      .loader(require.resolve("ts-loader"))
      .options({
        appendTsSuffixTo: [/\.vue$/, /\.md$/],
        compilerOptions: {},
        transpileOnly: false,
      })
      .end();
  },
};
