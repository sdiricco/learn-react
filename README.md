# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Installation and Run

Install packages with npm or yarn, I'll use `yarn`

```sh
yarn
```

Run application in dev mode

```sh
yarn dev
```

## React tutorial

1. [Getting Started](./docs/1.GettingStarted.md)
2. [Components](./docs/2.Components.md)
3. [Styles And Data Binding](./docs/3.StylesAndDataBinding.md)
4. [Conditional Rendering](./docs/4.ConditionalRendering.md)
5. [ListRendering](./docs/5.ListRendering.md)
6. [Events and State](./docs/6.EventsAndState.md)
7. [Props](./docs/7.Props.md)
8. [Childrean](./docs/8.Childrean.md)



