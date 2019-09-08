# appnuxt2

# app_nuxt

# лучше использовать с нуля есть свой билдер у него нет vue cli

# create-nuxt-app используется для билда изначального готовит структуру проекта nuxt

# npx create-nuxt-app <my-project> или npm init nuxt-app <my-project>

# none server framework,

# axios features

# bootstrap

# rendering mode single page application

# npx утилита которая позволяет запускать проеты из npm

# npm install -g npx

# -S, --save

# -D, --save-devs

# нужен node js не меньше 10 версии!!!!!!!!

# layouts hedear footer компоненты можем вставить вокруг nuxt

# создаем шаблоны для каждой страницы

# middleware набор функциий при рендеринге , до момента открытия страницы можно вынести в нее авторизацию

# pages хранит структуру и переводит в роутинг автоматически. Если файл начинается с \_name значит роут динамический

# plugins можно подключать глобальные обьявлять методы библиотеки

# static содержит файлы которые доступны в корне приложения напрямую к примеру домен/название файла robot.txt

> My premium Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
# билдит в продакшн режиме
$ npm run build
#запускает рендеринг сервир который отвечает сср
$ npm run start

# generate static project
# генерит статичный сайт в папке dist  страницы  по папкам
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
