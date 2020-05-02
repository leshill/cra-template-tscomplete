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

## Additional scripts

### `npm lint` or `yarn lint`

Compiles and then lints all Typescript files (_.ts_, _.tsx_).

### `npm lint:fix` or `yarn lint:fix`

Lints and applies fixes on all Typescript files (_.ts_, _.tsx_).

### `npm lint:watch` or `yarn lint:watch`

Watches and lints (does not compile) all Typescript files (_.ts_, _.tsx_).

### `npm storybook` or `yarn storybook`

Start the Storybook explorer on port 9009

### `npm build-storybook` or `yarn build-storybook`

Build the storybook configured in the Storybook directory into a static web app and place it inside the `storybook-static` directory.

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
