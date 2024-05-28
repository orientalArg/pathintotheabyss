
## 🧞 Commands

```sh
npm create astro@latest --template minimal
npm install sass
```
## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

`Every section of the home page is added as a component in /pages/[lang]/index.astro`

`All copywrite is passed to those components and can be edited in /data/i18n.js`

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

In order to add a new translation you'll need to create a new copywriting following the default format at `src/data/i18n.js` and update the attributes for `getStaticPaths()` function on `src/pages/[lang]/index.js`

```js
export function getStaticPaths () { 
  return [
    {params: {lang: 'en'}},
    {params: {lang: 'es'}},
  ];
}
```
### How does it works?

`getStaticPaths()` will receive these attributes from the URL and save them as a `const [lang]` variable. Another function will then compare the value of this variable with an attribute in `src/data/i18n.js`. In case the function finds a match, it will load the appropriate translation and pass the data as a parameter to the corresponding components..

Example: `website.com/ES/` is a positive match for `es` attribute at `i18n.js` file:

```
export const ui = {
  es: {name:'el camino hacia el abismo'}
  en: {name:'the path into the abyss'}
}
```

Note: In case the url doesn't exist it'll return the default homepage in english.

## Important Links:

| Design Sample | Source Code |
| --- | --- |
| <a href="https://www.figma.com/community/file/1345111803067019836/game-website-ui-prototype-desktop-mobile-beakdown"><img height="25" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA51BMVEUwMzwvMjovMjsmMToXMT1MNjh8OzSCSUlSPEHDRyf5Txz0Tg7/cmLNYVcfMTyqQyvyTh7xSxWxWFEJLDcuMTnKSCXXZVpTNTbzSwD/cmAzLx+tRkvdUXvSWUfRcG7QipqpZms9JyYuMDgsLTSDTs6iWf+nW/8AJAUAl8wAwP8tLzcmLil2SLWkVf8PhaYavP4jhrIvJikfLBupUP8AuO8vHhsGncktLjZCNVwaRkYqSFwrLDM2IEBwWbWDguAkHhAsLjYsLTUsJjITp20A1HsuEy0uIjIbk2UE2IgKz4MoS0ErLDQqODnoj8cFAAABZklEQVR4AaTMVQLCMBAE0N1JoO6O0/sfkqnLLy+eFfmHThvMDHytQ6AK2MuVHHIt3wpABRPj+RSEg8hgMgfjxE8pY4jyGKQqOrIpzUEqlOYgtPDPQXAISEtb7dvWFigBSDmAaVI/CII2DLuuC11TlgyXUk7M7f6g+vl6f76mL8ueQ/pR+atrLJAchmEA6Jn+pGpAPggzM7j/f89JOqZNTLsBuFmE7biI6IJ+tW/x4dHm+PSMnuehH3yLoSVEsSck71Ff6Q7t14jSkKLmqIWHmy0xRW5uoK9sJWYacvohUXiI6JUVW4kZXbqqm5boLr7rXyp2faZVRmuWDeM0M0sVBEHVa25ZpnomW7f9IPalz+jEilcF/UDbhRNHPsmAoQc1wEAs+1skNwD0IPYtrpPEaR2+oqgBwHgeO13nCAOw4QsoGgNc79u03UcAQ5qNIa+MQPt1XY2pzFdUZaqKHU9fN3yr6l9M9QI6YW0Sw7c5lAAAAABJRU5ErkJggg==" alt="a"/></a>|<a href="https://github.com/orientalArg/intotheabyss"><img height="25" src="https://camo.githubusercontent.com/6859b81bad9211632c09ba0ba5aff3ce23d87f38bd199a05cfdd67b70d8ef58e/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6769746875622e737667" alt="a"/></a> |
