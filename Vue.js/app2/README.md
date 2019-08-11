#npm i -g @vue/cli 
# vue create app2 создаем папку и приложение
# добавляем  babel css 
# .env для создания параметров для среды разработки можно 
# потом засетить process.env.VUE_APP_URL потом в компоненте #.env.development или  .env.production
# vue inspect > output.js посмотреть конфигурации вэбпак
# vue inspect > output.js --mode=production посмотреть 
#конфигурации вэбпак
#CRUD create read update delete
#500 ошибка сервера, 404 не существует запрос. 301 редирект. 401 нет доступа 
#304 эти данные закешированы и не были изменены 404- если на не существующий путь
#type cors крос доменный запрос обращаемся к другому серверу и по умолчанию асинхронные запрещены


# app2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
