# BudgetReact + TypeScript + Vite

This template provides a minimal setup to get [BudgetReact](https://github.com/JoeMcCleery/budget-react) working in Vite with HMR and some ESLint rules.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`

## Deploy

In `vite.config.ts`, replace `base: "/budget-react-template"` with your own base url.

```bash
# npm
npm run deploy

# yarn
yarn deploy
```
