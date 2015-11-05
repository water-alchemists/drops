# react-native-webpack-starter-kit

[![Dependency Status](https://david-dm.org/jhabdas/react-native-webpack-starter-kit.svg)](https://david-dm.org/jhabdas/react-native-webpack-starter-kit)
[![devDependency Status](https://david-dm.org/jhabdas/react-native-webpack-starter-kit/dev-status.svg)](https://david-dm.org/jhabdas/react-native-webpack-starter-kit#info=devDependencies)

A minimalist seed for building with React Native and Webpack using ES6. Leverages [`react-native-webpack-server`](https://github.com/mjohnston/react-native-webpack-server). Incorporates sane linting rules for React Native with ESLint. Follows the latest React Native stable release.

For an example implementation check out [Lumpen Radio](https://github.com/jhabdas/lumpen-radio). Or check out some other [Awesome React Boilerplates](http://habd.as/awesome-react-boilerplates/#react-native).

## Requirements

- [Node](https://nodejs.org) 4.x or better
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- [Xcode](https://developer.apple.com/xcode/) for iOS development (optional)
- [Android SDK](https://developer.android.com/sdk/) for Android development (optional)
- [Android Lollipop](https://www.android.com/versions/lollipop-5-0/) or better for Android device testing (optional)

## Stack

- [React Native](http://facebook.github.io/react-native/) for native app development
- [Babel](http://babeljs.io/) for ES6+ support
- [Webpack](https://webpack.github.io/) module loader and bundler

## Installation

Start by cloning this repo and installing dependencies:

```sh
git clone https://github.com/jhabdas/react-native-webpack-starter-kit.git
cd react-native-webpack-starter-kit
npm install # Install Node.js dependencies listed in ./package.json
```

## Running

Once dependencies are installed, start the application with:

```sh
npm start # or: node node_modules/.bin/rnws
```

This will start a [Webpack Dev Server](https://github.com/webpack/webpack-dev-server) which will watch your JS files for changes and automatically generate the `index.[platform].js` file expected by your React Native iOS or Android app.

### iOS

Open `ios/App.xcodeproj` in Xcode, build and run the project.

### Android

For android development use the following:

```sh
npm run android-setup-port
react-native run-android
```

Note Android support in React Native is relatively new, so expect some hiccups. Please see the official [Android Setup](http://facebook.github.io/react-native/docs/android-setup.html#content) documentation for getting set-up and additional information. And here's some [helpful npm scripts](https://github.com/mjohnston/react-native-webpack-server/issues/65#issuecomment-151222398) courtesy of [@niftylettuce](https://github.com/niftylettuce).

If you run into any issues please see the [Getting Started](http://facebook.github.io/react-native/docs/getting-started.html) guide for React Native before submitting an issue.

## Testing

As a minimalist seed this project does not introduce a testing framework. Instead it leverages simple static code analysis to help prevent coding mistakes and introduce some good practices for building React Native apps with ES6.

Webpack is configured with a pre-loader to lint the application with ESLint using the Babel parser during app development. And the `npm test` command may be run at anytime to lint source code otherwise. See the `.eslintrc` file to adjust [linter rules](http://eslint.org/docs/rules/) to your liking.

## Bundling

Building the app for distribution.

1. Execute `npm run bundle` to generate the [offline JS bundle](https://facebook.github.io/react-native/docs/running-on-device-ios.html#using-offline-bundle).
2. For iOS, update `AppDelegate.m` to load from pre-bundled file on disk.
3. Test the application, create an archive and submit to the store.

## Submitting to App Store

Please see [Submitting to App Store](http://habd.as/reflecting-on-react-native-development/#submitting-to-app-store). If you'd like help getting your app in the store I'm [available for booking](https://www.codementor.io/jhabdas) on Codementor.
