# vue-testpress

An experiment project on using testpress and vue-cli together.

## Setup

1. vue create testpress
2. npx create-vuepress-site
3. in the newly created docs folder, remove node_modules, and move all the npm config files to the root
4. add _Live edit support_ and _TypeScript support_

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

## Publish to gitpages

1. npm run doc:build
2. git checkout gh-pages # git checkout --orphan gh-pages (first time)
3. git add dist
4. git commit -m "Add dist"
5. rm docs -f
6. mv dist docs
7. git add docs
8. git commit -m "Rename dist to docs"
9. git push origin gh-pages

## Resources

- https://github.com/vuepress/create-vuepress-site
- https://www.karltarvas.com/2020/05/12/adding-vuepress-to-a-vue-cli-project-with-typescript.html
- https://morioh.com/p/c59bb71f91b3
