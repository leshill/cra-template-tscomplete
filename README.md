# cra-template-tscomplete

This is yet another TypeScript template for [Create React App](https://github.com/facebook/create-react-app).

To use this template, add `--template tscomplete` when creating a new app.

For example:

```sh
npx create-react-app my-app --template tscomplete

# or

yarn create react-app my-app --template tscomplete
```

This template creates a React app with:

* TypeScript
* Redux Toolkit
* Redux-Saga
* Sass

There are test examples for React components, React components with Redux, Redux reducers,  and Sagas. Saga testing is done with __Redux-Saga Test Plan__.

StoryBook needs two additional steps to finish setup:

1. Edit `package.json` and change the `xdevDependencies` key to `devDependencies`.
1. Run `yarn`.

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
