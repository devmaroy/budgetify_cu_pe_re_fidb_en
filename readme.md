<img src="public/images/logo/logo.png" width="100">

# **Budgetify**

This project is based on **React**, **Flexbox** layout, **HTML5** and modern **CSS3** principles. You can modify and use this project or certain components if you wish.

Created with the **Firebase Realtime Database**.

Last successfully tested on node version **8.2.1**

<br>

![](screenshot.png)


<br>

## Installation

Use these commands to install the dependencies and start the server.

1. **Clone from Github**

   ```
   $ git clone git@github.com:devmaroy/budgetify_cu_pe_re_fidb_en.git
   ```

2. **Install dependencies**
   ```
   $ yarn install / npm install
   ```
3. **Navigate into your directory where you cloned repository**

   ```
   $ cd my-folder
   ```

4. Create .env.development(use .env.example) file and fill it with the info from Firebase realtime database - create project

   ```
   https://console.firebase.google.com
   ```

5. **Start it up**

   ```
   Development:
   $ npm run build:dev / yarn run build:dev

   Production:
   $ npm run build:prod / yarn run build:prod
   ```

**Your site is now running at `http://localhost:9000`!**

<br>

## Structure

A quick look at the top-level files and directories you'll see in my project.

    .
    ├── public
    ├── server
    ├── src
    ├── .babelrc
    ├── .env.example
    ├── .node_version
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── screenshot.png
    ├── webpack.config.js
    ├── postcss.config.js
    ├── jest.config.js
    ├── yarn.lock
    └── readme.md

<br>

1.  **`/public`**: Here you can find public files and favicon files.

2.  **`/server`**: Very simple express server.

3.  **`/src`**: This directory contains all the necessary files such as React components and styles.

4.  **`.babelrc`**: Configuration file for babel.

5.  **`.env.example`**: Example configuration file for .env.

6.  **`.node_version`**: Best recommended node version for this project.

7.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

8.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for project.

9.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of npm dependencies that were installed for project. **(You won’t change this file directly).**

10.  **`screenshot.png`**: Screenshot of the final website.

11.  **`webpack.config.js`**: Configuration file for webpack

12. **`postcss.config.js`**: Configuration file for PostCSS

13. **`jest.config.js`**: Configuration file for Jest testing

14. **`yarn.lock`**: There is an identifier for every dependency and sub dependency that is used for a project.

15. **`readme.md`**: A text file containing useful reference information about project.

<br>

<hr>

<br>

### Live example:

**[budgetify.marekmatejovic.com](https://budgetify.marekmatejovic.com)**

<br>

Created by **[@devmaroy](https://twitter.com/devmaroy)** feel free to contact me

e-mail: **[hello@devmaroy.com](mailto:hello@devmaroy.com?subject=[GitHub]%20budgetify_cu_pe_re_fidb_en)**
