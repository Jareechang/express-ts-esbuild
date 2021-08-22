# @common-web mordern express example 

An Example of running an express.js api using with @common-web utils. Leverage latest babel + typescript features in your api.

**Update:**

Migrated the old repo using rollup to leverage esbuild ([@common-web/esbuild](https://github.com/Jareechang/common-web/tree/master/packages/esbuild)).

### Tech

- [@common-web/esbuild](https://github.com/Jareechang/common-web/tree/master/packages/esbuild) (build)
- [@common-web/ts-config](https://github.com/Jareechang/common-web/tree/master/packages/ts-config) (ts-config)
- [@common-web/prettier](https://github.com/Jareechang/common-web/tree/master/packages/prettier) (prettier)
- [@common-web/lint-staged](https://github.com/Jareechang/common-web/tree/master/packages/lint-staged) (lint-staged)
- nodemon (watch mode)

### Getting Started 

1. Installation

```
yarn install

```

2. Commands (run server static or in watch mode)

```sh

// Build src files (index.ts) into dist/index.js
yarn build

// runs the server 
yarn server:run 

// runs the server in watch mode
yarn server:watch 
```

3. Test out API 

**Request:**

```
curl http://localhost:3000/api/test | jq

```

**Response:**

```json
{
  "data": [
    {
      "name": "Bob",
      "age": 32
    },
    {
      "name": "Judy",
      "age": 33
    },
    {
      "name": "Jill",
      "age": 28
    },
    {
      "name": "Sally",
      "age": 22
    },
    {
      "name": "Susan",
      "age": 22
    }
  ]
}
```
