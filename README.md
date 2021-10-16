# vue-testpress

An experiment project on using testpress and vue-cli together.

## Setup

```
vue create testpress
npx create-vuepress-site
```

## Live edit support

### Install

```
npm i -D vuepress-plugin-live acorn-dynamic-import
```

::: tip
acorn-dynamic-import must be installed in order for vuepress-plugin-live to work
:::

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

## Publish to gitpages

```
npm run doc:build
git checkout gh-pages # git checkout -b gh-pages (first time)
rm docs -r
mv dist docs
git add docs
git commit -m "Rename dist to docs"
git push origin gh-pages
```

## Resources

- https://github.com/vuepress/create-vuepress-site
- https://www.karltarvas.com/2020/05/12/adding-vuepress-to-a-vue-cli-project-with-typescript.html
- https://morioh.com/p/c59bb71f91b3
