
## 🧞 Commands

```sh
npm create astro@latest --template minimal
npm install sass
```

## 🚀 Project Structure

`Every section of the home page is added as a component in /pages/[lang]/index.astro`

`All copywrite is passed to those components and ca be editen in /data/i18n.js`

https://github.com/orientalArg/pathintotheabyss/upload

```
/
├── public/images/
│   └── slides/
│   └── EN/
│   └── ES/
│
├── src/
│   └── data/
│   │   └── links.js
│   │   └── i18n.js
│   │
│   └── layout/
│   │   └── mainLayout.astro
│   │
│   └── components/
│   │   └── footer.astro
│   │   └── gameplay.astro
│   │   └── header.astro
│   │   └── hero.astro
│   │   └── links.astro
│   │   └── lore.astro
│   │   └── menu.astro
│   │   └── newsletter.astro
│   │   └── reviews.astro
│   │   └── specs.astro
│   │
│   └── pages/
│       └── index.astro
│       └── 404.astro
│       └── [lang]/
│           └── index.astro
└── package.json
```

##  Relative Paths, Copywriting & URLS

` To Add, Update or Delete copywriting or urls you'll need to modify the info in the following files:`

* URLS & Relative Paths info: `src/data/links.js`
* Copywrite [EN/ES] info: `src/data/i18n.js`

## Translations

In order to add a new translation you'll need to add the copywriting following the default format at `src/data/i18n.js` and update the attributes for `getStaticPaths()` function on `src/pages/[lang]/index.js`

```js
export function getStaticPaths () { 
  return [
    {params: {lang: 'en'}},
    {params: {lang: 'es'}},
  ];
}
```
### How does this work?

`getStaticPaths()` will receive these attributes from the URL and it'll save it as a variable `const [lang]`. Then another function will compare these variable with an attribute in `src/data/i18n.js`. In case it finds a coincidence it'll load the proper translation and past the data as a parameter to the components.

Example: `website.com/ES/` is a positive match for `es` attribute at `i18n.js` file:

```
export const ui = {
  es: {name:'el camino hacia el abismo'}
  en: {name:'the path into the abyss'}
}
```

Note: In case the url doesn't exist it'll return the default homepage in english

## Important Links:

| Design Sample | Source Code |
| --- | --- |
| <a href="https://github.com/orientalArg/intotheabyss"><img height="25" src="https://camo.githubusercontent.com/6859b81bad9211632c09ba0ba5aff3ce23d87f38bd199a05cfdd67b70d8ef58e/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6769746875622e737667" alt="a"/> </a>| <a href="https://github.com/orientalArg/intotheabyss"><img height="25" src="https://camo.githubusercontent.com/6859b81bad9211632c09ba0ba5aff3ce23d87f38bd199a05cfdd67b70d8ef58e/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6769746875622e737667" alt="a"/></a> |
