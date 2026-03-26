<div align=center>

# THE PATH INTO THE ABYSS

  <a href="https://www.figma.com/community/file/1345111803067019836/game-website-ui-prototype-desktop-mobile-breakdown"><img alt="figma" src="https://img.shields.io/badge/figma%20→-design%20&%20prototype%20-white?style=for-the-badge&logo=figma&color=orangered"/></a>

  <img src="https://www.upwork.com/att/download/portfolio/persons/uid/1634152552807448576/profile/projects/files/de350929-e339-4ce8-918c-ec663dcfd7d8"/>


  <small>I created this Landing Page as a proposal for the a Video Game website called ”The Path Into The Abyss”. A videogame based on the universe created by filmmaker Matías Rispau.</small>
</div>

<div align="center">

`made with`<br/>
<img alt="Astro" src="https://img.shields.io/badge/Astro-090318?style=for-the-badge&logo=astro"/>
<img alt="scss" src="https://img.shields.io/badge/scss-090318?style=for-the-badge&logo=sass"/>
<img alt="Astro" src="https://img.shields.io/badge/figma-090318?style=for-the-badge&logoColor=orange&logo=figma"/>
</div>

```js
🚀 Project Structure


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
<sub>To Add, Update or Delete copywriting or urls you'll need to modify the info in the following files:</sub>

* URLS & Relative Paths info: `src/data/links.js`
* Copywrite [EN/ES] info: `src/data/i18n.js`

>[!NOTE]
><sub>In case the url doesn't exist it'll return the default homepage in english.</sub>



## Translations
<sub>To add a new translation follow the next steps:</sub>

* Create a new copywriting following the default format at `src/data/i18n.js`
* Update the attributes for `getStaticPaths()` function on `src/pages/[lang]/index.js`

```js
export function getStaticPaths () { 
  return [
    {params: {lang: 'en'}},
    {params: {lang: 'es'}},
  ];
}
```
>[!TIP]
>HOW DOES IT WORK

The function `getStaticPaths()` will receive these attributes from the URL and save them as a `const [lang]` variable.

Another function will then compare the value of this variable with an attribute in `src/data/i18n.js`. In case the function finds a match, it will load the appropriate translation and pass the data as a parameter to the corresponding components..

<sub>E.g: `website.com/ES/` is a positive match for `es` attribute at `i18n.js` file:</sub><br/><br/>

```js
export const ui = {
  es: {name:'el camino hacia el abismo'},
  en: {name:'the path into the abyss'}
}
```
---

>[!NOTE]
>DISCLAIMER
>
><sub>All assets (images and GIFs) belong to Matias Rispau, and The Path Into The Abyss trademark, all copywriting was made by myself as well as the icons and the Metropolitan Area Map based on the information I could extract from The Abyss DevLog YouTube Video.</sub><br/>
>
><sub>© 2024/2025 Brainstorm Films & XMR Productions. All Rights Reserved. Matias Rispau’s, The Path Into The Abyss, and the Brainstorm logo are registered or unregistered trademarks of Brainstorm Films and XMR productions in Argentina and/or other countries.
</sub><br/>
>
><sub>Microsoft, the Xbox Sphere mark, the Series X logo, Series S logo, Series X|S logo, Xbox One, Xbox Series X, Xbox Series S, and Xbox Series X|S are trademarks of the Microsoft group of companies. “PlayStation LOGO”, “PlayStation”, “PS5 LOGO” and “PS4 LOGO” are registered trademarks or trademarks of Sony Interactive Entertainment Inc.</sub>
