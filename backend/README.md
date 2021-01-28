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
