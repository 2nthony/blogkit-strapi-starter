# [Blogkit Strapi Starter](https://github.com/2nthony/blogkit-strapi-starter)

Starter template for [blogkit](https://github.com/2nthony/blogkit).

## Getting started

### 获取环境变量

- `STRAPI_API_URL` strapi 的公开抵制。 (Default：`http://localhost:1337`)
- `STRAPI_CONTENT_TYPE` 想被获取的 `Content-Type` - `Collection Type`。 (Default: `articles`)

配置可填写到 `next.config.js`

```js
const nextConfig = {
  env: {
    STRAPI_API_URL: "http://localhost:1337",
    STRAPI_CONTENT_TYPE: "articles",
  },
};
```

## 配置

1. 更新 `blogkit.config.ts` 中的 title 值。

## 部署

部署到 Vercel :

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F2nthony%2Fblogkit-yuque-starter&env=YUQUE_TOKEN,YUQUE_NAMESPACE)
