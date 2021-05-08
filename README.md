# OMDB_Searcher

[![License](https://img.shields.io/badge/license-MIT-green)](http://badges.mit-license.org)

the project deployed on GitHub page @ https://ruizi.github.io/OMDB_Searcher/

![](https://github.com/ruizi/OMDB_Searcher/blob/main/public/The%20Shoppies.gif)

---
## Introduction

This project aims to build up a front-end page to receive user inputs and then search movies through OMDb API( http://www.omdbapi.com/) which is a massive movie database.

This project uses Material UI components to help manage page layout, also, the browser local storage was combined in this project to store nominated movies so that the nomination lists can be loaded to the screen whenever our users come back to the page.

---

## Project  setup

1. Download this project from its GitHub Repository by using `git clone`

   ```
   git clone git@github.com:ruizi/OMDB_Searcher.git
   ```

2. Open then terminal/iTerm and get into the local file folder

   ```
   cd ./OMDB_Searcher
   ```

3. Run `npm install` to install the dependencies of this project.


4. Run `npm start` to running the project locally.

5. Open your browser and surfing this address http://localhost:3000/

## deployment

1. Open the `package.json` file in the project root folder


2. Change the first item to your GitHub page address
   ```
   "homepage": "https://${yourgithubusername}.github.io/OMDB_Searcher",
   ```

3. Run `npm run deploy` in your terminal


4. Open the browser and input the homepage address to see it online.