# react-starter-pages [![Node.js CI](https://github.com/amazingrv/react-starter-pages/actions/workflows/node.js.yml/badge.svg)](https://github.com/amazingrv/react-starter-pages/actions/workflows/node.js.yml)

[Live Demo Link](https://amazingrv.github.io/react-starter-pages/)

A Simple react starter kit with exposed config and hooks support (for Node version 12 LTS and above).

Supports client-side routing, ReduxJS, eslint with recommended lint rules, prettier and other best practices supported OOB

Currently supported config:

- exposed configuration for eslint 7, babel 7, postcss 8 and webpack 5
- browserlist support with autoprefixer for latest polyfills
- babel-preset-env for es2020 feature support, Core-JS 3 Polyfills and lodash babel plugin
- webpack asset modules for svg, font and images etc.
- support for sass preprocessor and css 3, optimized for development and prod builds
- webpack tree-shaking with lodash pure and moment locale optimizations
- prod build with minimum size using terser, css optimizer and html minify

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot reloading mode using webpack-dev-server:

```sh
npm start
```

To create a production build:

```sh
npm run build
```

## Running

Open the file `dist/index.html` in your browser
