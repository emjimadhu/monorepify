[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GitHub last commit][last-commit-shield]][last-commit-url]
[![MIT License][license-shield]][license-url]

<p align="center">
  <a href="#">
    <img src="readme-images/logo.png" alt="monorepify-logo" width="80" height="80">
  </a>

  <h3 align="center">Monorepify</h3>

  <p align="center">
    A boilerplate for Full stack VueJS and nestJS and other typescript frameworks too. But i believe you can add JS frameworks too (with little modification)
    <br />
    <br />
    <a href="https://github.com/emjimadhu/monorepify/issues">Report Bug</a>
    ·
    <a href="https://github.com/emjimadhu/monorepify/issues">Request Feature</a>
  </p>
</p>



## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Required Versions](#required-versions)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Scripts](#scripts)
* [Directory Structure](#directory-structure)
* [How to](#how-to)
  * [Code Scaffolding](#code-scaffolding)
      * [VueJS](#vuejs)
      * [NestJS](#nestjs)
      * [Shared](#shared-typescript)
  * [Add other frameworks](#add-other-frameworks)
      * [Angular (Example)](#angular-example)
* [License](#license)
* [Contact](#contact)



## About The Project

[![Monorepify Screen Shot][product-screenshot]](#)

I like monorepos for code sharing between multiple projects in a single codebase. For other frameworks like angular, react, nest, express, There is wonderful tool called **NX**. They don't support Vue (for now). That's why i created this boilerplate. But you can you any JS Frameworks with little tweaks!

A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Built With
* [NodeJS](https://nodejs.org)
* [Yarn](https://yarnpkg.com)
* [Vue](https://vuejs.org)
* [NestJS](https://nestjs.com/)

## Getting Started

### Required Versions

- **node** - v12.13.1
- **npm** - v6.12.1
- **yarn** - v1.21.1
- **vue** - v4.1.1
- **nest** - v6.5.9 

### Prerequisites

Tools and Services need to run this app.

* node
```sh
# Mac and Linux using nvm (node-version-manager)
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash

nvm install v12.13.1
```

* yarn
```sh
# Mac
brew install yarn

# Debian / Ubuntu
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn
```

* nestjs
```sh
# Mac and Linux using nvm (node-version-manager)
npm i -g @nestjs/cli
```

### Installation

1. Clone the repo
```sh
# SSH
git clone git@github.com:emjimadhu/monorepify.git

# HTTPS
git clone https://github.com/emjimadhu/monorepify.git
```
2. Install NPM packages
```sh
yarn install
```

## Scripts

* `yarn dev:all:start` - Starts Development server for shared, vue and nest,
* `yarn dev:all:build` - Builds shared, vue and nest,
* `yarn dev:vue:start` - Starts vue development nest,
* `yarn dev:vue:build` - Builds vue,
* `yarn dev:vue:lint` - Lints vue,
* `yarn test:vue:unit` - Unit testing for vue,
* `yarn test:vue:e2e` - End to End testing for vue,
* `yarn dev:nest:start` - Starts nest development server,
* `yarn dev:nest:build` - Builds nest,
* `yarn dev:nest:lint` - Lints nest,
* `yarn prod:nest:start` - Starts nest in production mode,
* `yarn dev:shared:start` - Starts shared development nest,
* `yarn dev:shared:build` - Builds shared,
* `yarn dev-shared:vue:start` - Starts shared and vue in development mode,
* `yarn dev-shared:nest:start` - Starts shared and nest in development mode,
* `yarn dev-shared:vue:build` - Builds shared and vue,
* `yarn dev-shared:nest:build` - Builds shared and nest,
* `yarn utils:remove-node-modules` - Removes all node_modules folders

## Directory Structure

- `root`: Project root holds all the fies of the project
    - `apps`: Holds client(VueJS) and server(NestJS) projects (You can add any client or server frameworks in here in addition or replace with existing ones. See section `Add other frameworks` in `How To`)
        - `vue`: A Vue project created using vue-cli
        - `nest`: A Nest project created using nest-cli
    - `libs`: Holds all the common codes you can share between projects
        - `shared`: A shared module for common code sharing across projects in this work space.
    - `readme-images`: Holds all the images for README.

## How to

- ### Code Scaffolding
    - #### VueJS
        - `cd apps/vue`
        - `# Run any vue-cli commands in here`
     - #### NestJS
       - `cd apps/nest`
       - `# Run any nest-cli commands in here ex: nest g m <module-name>`
     - #### Shared (Typescript)
       - `cd libs/shared`
       - `# Creae any number of codes that you want to share and make sure you export the files in index.ts`
- ### Add other frameworks
    - ### Angular (Example)
        - `cd apps`
        - `ng new <app_name>`
        - Remove `node_modules` and `package-lock.json` in `<app_name>`
        - `tsconfig.json`: Put `../../tsconfig` in `extends` field of `tsconfig` and remove common tsconfig options which can be shared across projects.
        - `tslint.json`: Put `../../tslint` in `extends` field of `tslint` and remove common tslint options which can be shared across projects.
        - Run `cd <root_directory> && yarn utils:remove-node-modules && yarn install`
        - Look at branch **enhancement/new-angular-app** for example setup
     - I believe you can add other typescript frameworks with this same steps! (You can even add native JS frameworks with little of tweaking)

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Em Ji Madhu - [![LinkedIn][linkedin-shield]][linkedin-url]

Project Link: [Monorepify](https://github.com/emjimadhu/monorepify)

[contributors-shield]: https://img.shields.io/github/contributors/emjimadhu/monorepify.svg?style=flat&label=Contributors
[contributors-url]: https://github.com/emjimadhu/monorepify/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/emjimadhu/monorepify.svg?style=flat&label=Forks
[forks-url]: https://github.com/emjimadhu/monorepify/network/members
[stars-shield]: https://img.shields.io/github/stars/emjimadhu/monorepify.svg?style=flat&label=Stars
[stars-url]: https://github.com/emjimadhu/monorepify/stargazers
[issues-shield]: https://img.shields.io/github/issues/emjimadhu/monorepify.svg?style=flat&label=Issues
[issues-url]: https://github.com/emjimadhu/monorepify/issues
[last-commit-shield]: https://img.shields.io/github/last-commit/emjimadhu/monorepify?label=Last%20Commit&style=flat
[last-commit-url]: https://github.com/emjimadhu/monorepify/blob/master/LICENSE
[license-shield]: https://img.shields.io/github/license/emjimadhu/monorepify.svg?style=flat&label=License
[license-url]: https://github.com/emjimadhu/monorepify/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=1
[linkedin-url]: https://www.linkedin.com/in/em-ji-madhu-8b007456/
[product-screenshot]: readme-images/screenshot.png
