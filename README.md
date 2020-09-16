# NPM Package Template

This is the template for node packages.
It has the recommended configuration for making a new node package.

It's good to go. You can start including all your files in the /src directory (with index.ts as the starting point) and run "npm run build" to build them in /build.

# Tools:

If you are using the Visual Studio Code as your code editor (which I recommend, you can get it [here](https://code.visualstudio.com/)). You should install and use their associated plugins.

## Typescript

As a Javascript superset. All the files should be written in TypeScript in order to make the code cleaner and easier to migrate to Deno in the future.
Its configuration is set in the .tsconfig file. You can read how to configure it [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

Read the docs: [Typescript Docs](https://www.typescriptlang.org/).

## Eslint

For code styling. It ensures you are using the best practices and all the developers are following the same guides. The configuration is set in the .eslintrc file. You can read how to configure it [here](https://eslint.org/docs/user-guide/configuring).

We use the AirBnb style guide for coding: [Guide docs](https://github.com/airbnb/javascript).

Read the docs: [Eslint docs](https://eslint.org/).

VSCode plugin: [here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

## Prettier

It's an opinionated code formatter used for making the code prettier. Also, this way all the developers will be following the same style guides. It's configured in the .prettierrc file. You can read how to configure it [here](https://prettier.io/docs/en/configuration.html).

It's recommended to set "formatOnSave" to True in your Code Editor to make this step easier.

Read the docs: [Prettier docs](https://prettier.io/).

VSCode plugin: [here](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

## Jest

For unit testing it uses Jest. It will look for all the files which their names finishes with ".test.ts" in the "/tests" dir and execute them. Jest it's a very powerful tool for testing. Its configuration is set in the jestconfig.json file. You can read how to configure it [here](https://jestjs.io/docs/en/configuration).

Read the docs: [Jest docs](https://jestjs.io/).

## Husky

It uses husky to add a hook to git, so it runs eslint and prettier before commiting every time.

**Note**: We do not use any CSS/LESS/SASS extension or linter because we do NOT recommend to use them in node packages. This is because the bundler can make it hell to achieve. If you want to use CSS, you should use inline-style (which makes your component more easily included in other apps). If you choose to apply CSS or something like that, you might find yourself being blocked by Content Security Policies or having problems with bundlers like webpack.

# Folder structure

**Directories**:

- **build**: Has the compiled code and it's prepared to work. It contains the files that will be published in npmjs when you use "npm publish". This directory is removed and remade everytime you run "npm run build", so never put something that cannot be erased there.
- **node_modules**: It's the standard node_modules folder for node JS.
- **src**: It contains the source of the package. It's the code to be compiled when you run "npm run build".
- **tests**: Contains all the different files what will be tested when you use "npm run test". Jest will look for all the files finishing with ".test.ts".

**Files**:

- **clean.js**: An util script used to clean build directory.
- **.eslintrc.json**: Contains all the configuration for [eslintrc]((https://eslint.org/docs/user-guide/configuring).
- **.gitignore**: Contains all the files and directories that won't be upstreamed to git. How to configure: [gitignore](https://git-scm.com/docs/gitignore).
- **.npmrc**: Contains how npm wil work. How to configure: [npmrc](https://docs.npmjs.com/configuring-npm/npmrc.html).
- **.pretierrc**: Contains prettier configuration. How to configure: [prettierrc](https://prettier.io/docs/en/configuration.html)
- **CHANGELOG.md, LICENSE and README.md**: Standard files that have information about how to use the package (this file), the changes in each release and the license.
- **jestconfig.json**: Contains Jest configuration. How to configure: [jestconfig](https://jestjs.io/docs/en/configuration).
- **package.json**: Node Package configuration. How to configure: [npm](https://docs.npmjs.com/creating-a-package-json-file).
- **tsconfig.json**: Contains TypeScript configuration. How to configure: [tsconfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

# How to use

- Start with index.ts in /src. Export the main content with "export = " in the last line of the file.
- Add unit testings to /tests with Jest.
- Configure package.json to meet your needs (package name, version, dependencies, etc.).
- Modify CHANGELOG and README to have information about your package.
- Use "npm publish" when finished (it will "npm run build" before).

# Scripts

You can use the following commands:
| Command | Description |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| npm run install-globals | Installs globally dependencies like eslint and prettier. I know globals are bad, but this way you can use the scripts in any OS. |
| rpm run lint | Runs eslint in the /src directory. |
| npm run format | Runs prettier in the /src directory. |
| npm run test | Runs Jest for all the test in the /tests directory. |
| npm run compile | Compiles all the files in the /src directory to the /build directory. Also it copies all the files. |
| npm run build | Runs npm run lint, format, test and compile. |

# License

MIT © [Matías Puig](https://www.github.com/matipuig)
