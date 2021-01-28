# frontend
## base
```shell
yarn init -y
```

## react
```shell
yarn add react react-dom
```

## nextjs
```shell
yarn add next
mkdir -p src/pages

cat << EOF > src/pages/index.tsx
function HomePage() {
  return <div>Welcome to Next.js!</div>
}

export default HomePage
EOF
```
insert below to `package.json`
```shell
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}
```
and run `yarn dev` to create `next-env.d.ts`

## Typescript
```shell
yarn add -D typescript @types/react @types/node
npx tsc --init
```


### ESLint, Prettier
insert below to `package.json` "scripts"
```shell
    "lint": "eslint src/ --ext .ts,.tsx",
    "format": "prettier --write src/**/*.{ts,tsx}",
```

````shell
yarn add -D eslint eslint-config-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier
yarn add -D eslint-config-react-app @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-eslint eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks

cat <<EOF > .eslintrc
{
  "parser": "@typescript-eslint/parser",
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ]
}
EOF
````

### styled-component
```shell
yarn add styled-components
yarn add -D @types/styled-components babel-plugin-styled-components
```

### JEST
insert below to `package.json` "scripts"
```shell
    "test": "jest"
```

```shell
yarn add -D jest  ts-jest @types/jest
yarn ts-jest config:init
mkdir src/util
```
