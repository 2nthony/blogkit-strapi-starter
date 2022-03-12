# [Blogkit Strapi Starter](https://github.com/2nthony/blogkit-strapi-starter)

Starter template for [blogkit](https://github.com/2nthony/blogkit).

![zNBvgZ8fVuRU](https://cdn.jsdelivr.net/gh/2nthony/statics@main/uPic/zNBvgZ8fVuRU.png)

## Getting started

### Strapi guide

<details><summary>Blogkit strapi STEP-BY-STEP guide here.</summary>

#### 1. Create a new strapi project

```sh
npx create-strapi-app@latest my-blog --quickstart
```

#### 2. Register the first administration user, by completing the form, you now have access to the admin panel.

![](https://docs.strapi.io/assets/img/qsg-handson-part1-01-admin_panel_2.a1602906.png)

#### 3. Create collection types with the Content-Type builder.

Create a "Article" collection type

![D1YTS2DESOHb](https://cdn.jsdelivr.net/gh/2nthony/statics@main/uPic/D1YTS2DESOHb.png)

![lDKHvw3PJLth](https://cdn.jsdelivr.net/gh/2nthony/statics@main/uPic/lDKHvw3PJLth.png)

#### 4. Create fields for collection type

![EtmAF7JbiwWR](https://cdn.jsdelivr.net/gh/2nthony/statics@main/uPic/EtmAF7JbiwWR.png)

![R5N0L666vPmk](https://cdn.jsdelivr.net/gh/2nthony/statics@main/uPic/R5N0L666vPmk.png)

![yf0NgOYtq4YL](https://cdn.jsdelivr.net/gh/2nthony/statics@main/uPic/yf0NgOYtq4YL.png)

#### 5. Now create your posts

![BSh4tUUfXOxU](https://cdn.jsdelivr.net/gh/2nthony/statics@main/uPic/BSh4tUUfXOxU.png)

![pih20lHLE4Uu](https://cdn.jsdelivr.net/gh/2nthony/statics@main/uPic/pih20lHLE4Uu.png)

#### 6. Get your posts through the API by setting permissions

![R6YBVcatwmQZ](https://cdn.jsdelivr.net/gh/2nthony/statics@main/uPic/R6YBVcatwmQZ.png)

![YK1cLOy1yKrF](https://cdn.jsdelivr.net/gh/2nthony/statics@main/uPic/YK1cLOy1yKrF.png)

#### 7. Refresh your page

Now you see your post list and post content.

![w74LKUPX24zf](https://cdn.jsdelivr.net/gh/2nthony/statics@main/uPic/w74LKUPX24zf.png)

</details>

### Environment variables

- `STRAPI_API_URL` strapi address. (Default: `http://localhost:1337`)
- `STRAPI_CONTENT_TYPE` collection API ID(Plural) of Content-Type Builder. (Default: `articles`)

### Collection type fields

- `title` - `Text`
- `content` - `Rich text`
- `excerpt` - `Text`

## Configuration

#### Update the site title in `blogkit.config.js`

```js
export default defineConfig({
  siteConfig: {
    title: "your blog title",
  },
});
```

#### Use the difference fields in collection type

```js
export default defineConfig({
  // ...
  request: request({
    attributes: {
      title: "your title field",
      content: "your content field",
      excerpt: "your excerpt field",
    },
  }),
});
```

## Deply your own

Deply the blogkit strapi starter using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F2nthony%2Fblogkit-strapi-starter&env=STRAPI_API_URL,STRAPI_CONTENT_TYPE)

## Author

[colmugx](https://github.com/colmugx)
