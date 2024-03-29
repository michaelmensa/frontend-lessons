# WEBPACK

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

1. How to setup Webpack for a basic project
2. Entry points, output, and loaders
3. How to add plugins
4. How to split your code into chunks
5. How to setup a dev server

1. **How to setup Webpack for a basic project:**
   - This involves installing Webpack and configuring it for a basic project setup. It includes setting up a webpack configuration file (typically named `webpack.config.js`), specifying entry points, output destinations, and basic loaders/plugins.

2. **Entry points, output, and loaders:**
   - **Entry points:** These are the starting points of your application where Webpack begins its bundling process. They typically point to the main file or files of your application.
   - **Output:** This specifies where Webpack should emit the bundled files. It includes settings like the output path and filename.
   - **Loaders:** Loaders are used to preprocess files before they are added to the bundle. They allow Webpack to handle different file types like CSS, images, or JavaScript modules by applying transformations to them.

3. **How to add plugins:**
   - Plugins in Webpack are powerful tools that can perform a wide range of tasks like optimizing bundles, injecting variables, or generating HTML files. They extend the functionality of Webpack beyond what loaders can do.

4. **How to split your code into chunks:**
   - Code splitting allows you to split your bundle into multiple smaller bundles, which can be loaded on demand. This can improve initial loading times and reduce the size of the initial bundle sent to the client.

5. **How to setup a dev server:**
   - The webpack-dev-server is a development server that provides live reloading, hot module replacement, and other features to improve the development experience. Setting up a dev server allows you to quickly test and iterate on your code without having to manually refresh the browser.

## Resources
- [Documentation](https://webpack.js.org/concepts/)
- [Beginner guide](https://www.sitepoint.com/webpack-beginner-guide/)
- [npm-package.json](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)