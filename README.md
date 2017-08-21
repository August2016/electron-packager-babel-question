About
---
This repository displays an issue in which [electron-packager](https://github.com/electron-userland/electron-packager) doesn't work with [babel-register](https://babeljs.io/docs/usage/babel-register).

Seteps to reproduce
---
#### Verify that the code works without `electron-packager`:
1. Clone this repo
2. `npm i`
3. `npm start`

You should see a window appear that says Hello World.


#### Verify that the app will not run after packaged with `electron-packager`:
1. `npm run package`
2. Open the resulting directory and run the app
3. You will see the following error:

```
SyntaxError: Unexpected token import
    at Object.exports.runInThisContext (vm.js:78:16)
    at Module._compile (module.js:543:28)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Object.<anonymous> (/Users/me/Desktop/electron-packager-babel-question/electron-packager-babel-question-darwin-x64/electron-packager-babel-question.app/Contents/Resources/electron.asar/browser/init.js:171:8)
    at Object.<anonymous> (/Users/me/Desktop/electron-packager-babel-question/electron-packager-babel-question-darwin-x64/electron-packager-babel-question.app/Contents/Resources/electron.asar/browser/init.js:173:3)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
```

This is happening because the code is using `import` statements, which are supported by babel but there would need to be a way to tell `electron-packager` to run `electron` using the `--require babel-register` flag.
