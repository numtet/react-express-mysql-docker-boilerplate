## base
```
yarn init -y
mkdir dist src webpack
```

### Typescript
```
yarn add -D typescript ts-node
npx tsc --init
```

### ESLint, Prettier
```shell
yarn add -D eslint eslint-config-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier

cat <<EOF > .eslintrc
{
  "env": {
    "node": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  "parser": "@typescript-eslint/parser",
  "rules": {
    "@typescript-eslint/no-var-requires": 0
  },
  "plugins": ["@typescript-eslint"]
}

EOF
```

### Express
```shell
yarn add express
yarn add -D @types/express body-parser
```

### nodemon
```shell
yarn add -D nodemon

cat <<EOF > nodemon.json
{
  "restartable": "rs",
    "env": {
    "NODE_ENV": "development"
  },
  "watch": ["src"],
  "ext": "js, mjs, json, ts, css",
  "ignore": ["tests/**/*.ts"],
  "exec": "npx ts-node ./src/index.ts"
}
EOF
```

### TypeORM
```shell
yarn add typeorm reflect-metadata
yarn add -D @types/node

mkdir src/migration src/entity src/subscriber
```

```shell
cat <<EOF > ormconfig.js
module.exports = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};

EOF
```
change variables to connect(host,port, etc..)
you can check details at [official](https://typeorm.io/#/undefined/installation)

### Webpack
```shell
yarn add -D webpack webpack-cli webpack-merge webpack-node-externals ts-loader
touch webpack/base.config.js
touch webpack/dev.config.js
touch webpack/prod.config.js
```

###JEST
```shell
yarn add -D jest @types/jest ts-jest
```
