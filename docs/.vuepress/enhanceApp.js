import HelloWorld from "@/components/HelloWorld.vue";
import HelloWorldTSX from "@/components/HelloWorldTSX";

/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  Vue.component("HelloWorld", HelloWorld);
  Vue.component("HelloWorldTSX", HelloWorldTSX);
  // ...apply enhancements for the site.
};
