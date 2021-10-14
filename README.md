# vue-testpress

An experiment project on using testpress and vue-cli together.

## Live edit support

### Install

```
npm i -D vuepress-plugin-live
```

### Config

```js
// docs/.vuepress/config.js
module.exports = {
  plugins: [[["live"]]],
};
```

### Usage

Register component

```js
// docs/.vuepress/enhanceApp.js
export default ({ Vue }) => {
  Vue.component("HelloWorld", HelloWorld);
};
```

Reference the registered component

````
```vue live
<button>example</button>
```
````

## TypeScript support

### Install

```
npm i -D vuepress-plugin-typescript vuepress-types
```

### Config

```js
// docs/.vuepress/config.js
module.exports = {
  plugins: [
    [
      "vuepress-plugin-typescript",
      {
        tsLoaderOptions: {
          transpileOnly: true,
        },
      },
    ],
  ],
};
```

## Resources

- https://www.karltarvas.com/2020/05/12/adding-vuepress-to-a-vue-cli-project-with-typescript.html
- https://morioh.com/p/c59bb71f91b3
