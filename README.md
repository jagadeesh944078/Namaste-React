# Namste React

# git setup

-git config --global user.name "your user name"

-git config --global user.email "your email id"

-git add .

-git commit -m "first commit message"

-git push origin main

-git pull

# creating multpile branches in git

-git branch "branch name"

-git checkout "create branch name"

-git branch --list

-git add . //it will add all files in specific branch

OR

-git add "specific file name" //if u want to add any specific file

-git commit "commit message"

-git push origin "created branch name"

-git checkout "main branch"

-git merge "created branch main" // all latest changes come to main branch

-git push origin main

# parcel

# i creates

-Dev Build

-Local Server

-HMR - (hot module replacement)

-File watching alogorithm - written in C++

-Caching - Faster builds

-image optimization

-minification

-Bundling

-compressing

-consistent Hashing - its big topic

-code spliting

-diffrential bundling - support older browesers as well

-Dignostic

-error handling

-host on https as well

-Tree shaking - removed unused code for u

- diff dev and prod bundles

package.json

-if we use "caret(^)" before version number if suppose there is any minor update in future it automaticall update to the latest version

-"tilde(~)" update automatically for major updates

package-lock.json

-it locks the version and the keep exact version of the dependencies

-it tracks exact version which u installed in your project

official documentation of React
https://legacy.reactjs.org

offical documentation of parcel
https://parceljs.org/

episode-03

- add scripts in package.json so we can run application using npm run install or npm install

- "scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html",
  },

- for build npm run build

# JSX Information

- jsx is javascript syntax which is easier to create the element and jsx is not part of React here jsx is diffrent and react is different

- jsx is not a html or xml in JS u can say its html like syntax or xml like syntax

- we can large application without using JSX as well but JSX makes our developers life easier

- jsx is a convention where we merge all html and JS together

# how JSX code works?

- it transpiles JSX before it reaches to Js here transpilation will do the parcel

- parcel will tell babel to transpiles(converting) the jsx code

- finally JSX code will convert into React.createElement and that will convert into React element object then it will render as a html element using render method

- you can see how jsx converted to react element in babel offical website https://babeljs.io/

# why JSX is not html?

- In JSX we write attribute className="something" but in html we write class="header" so here we write className and finally babel converts it to class

# why we use parthensis for writting jsx code?

- babel should know the start and end point so using the brackets we said to babel start and endpoint

- for single line code brackets are not mandatory even you can keep it but for multiline code brackets or mandatory

# React component ?

- in React everything is one component

2 types components

1. Class Based Component (older)
2. Function Based Component (latest)

Ex: button is one component & header component & footer etc..

# Functional Component ?

-Functional component is a normal javascript function which return some piece of jsx code or React element and React function should start with capitial letter

- we can write functions using function keyword as well but arrow function is newer way and industry standard everywhere you see array functions only most

- jsx syntax take care malicious attack (xcross scripting site attack)

- jsx expression must have one single parent
