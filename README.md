# Namste React

# git setup

- git config --global user.name "your user name"
- git config --global user.email "your email id"
- git add .
- git commit -m "first commit message"
- git push origin main
- git pull

# creating multpile branches in git

- git branch "branch name"
- git checkout "create branch name"
- git branch --list
- git add . //it will add all files in specific branch
- git add "specific file name" //if u want to add any specific file
- git commit "commit message"
- git push origin "created branch name"
- git checkout "main branch"
- git merge "created branch main" // all latest changes come to main branch
- git push origin main

# parcel

# i creates

- Dev Build
- Local Server
- HMR - (hot module replacement)
- File watching alogorithm - written in C++
- Caching - Faster builds
- image optimization
- minification
- Bundling
- compressing
- consistent Hashing - its big topic
- code spliting
- diffrential bundling - support older browesers as well
- Dignostic
- error handling
- host on https as well
- Tree shaking - removed unused code for u
- diff dev and prod bundles

# package.json

- if we use "caret(^)" before version number if suppose there is any minor update in future it automaticall update to the latest version
- "tilde(~)" update automatically for major updates

# package-lock.json

- it locks the version and the keep exact version of the dependencies
- it tracks exact version which u installed in your project
- official documentation of React https://legacy.reactjs.org
- offical documentation of parcel https://parceljs.org/

# episode-03

- add scripts in package.json so we can run application using npm run install or npm install
- "scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html",
  },
- for build npm run build

# JSX Information

- jsx is javascript syntax which is easier to create the element and jsx is not part of React here jsx is diffrent and react is different
- jsx is not a html or xml in JS u can say its html like syntax or xml like syntax
- we can build large application without using JSX as well but JSX makes our developers life easier
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
- 2types components

1. Class Based Component (older)
2. Function Based Component (latest)

- Ex: button is one component & header component & footer etc..

# Functional Component ?

- Functional component is a normal javascript function which return some piece of jsx code or React element and React function should start with capitial letter
- we can write functions using function keyword as well but arrow function is newer way and industry standard everywhere you see array functions only most
- jsx syntax take care malicious attack (xcross scripting site attack)
- jsx expression must have one single parent

# episode -04

# props

- props nothing but properties (short form is props) which pass something to the component
- if u want to pass dynamically some data to the compoenent we use props
- passing props to the component just like passing argument to the javascript function
- React basically takes all the props values grab it inside the object so it will pass over function component as props

# config driven UI

- UI changes according to the config(backend data) automatically based on location or something(ex: swiggy app u can see carousel based on location offers will be changed)
- example suppose in each location u want diffrent background-color then u can send color as config so this config will Drive your UI its known as config driven UI

- whenever you are looping on anything u have to always give the key

# why we need to use key while looping any React component ?

- react itself won't able to find out uniquely identified component(restaurant card) what it basically do it will rerender all components when u add any new component(restaurant card)
- it will create performence issue because there 100 restaurant cards then it will rerender all cards when u add any extra card that's y "key" is required
- when u add key value then each card have unique id so react can easily findout when new card can be added in this time it won't rerender all restarent cards only in specfic postion the card will be added " its a huge performance optimization of your application " so don't forget to add key value while looping component
- sometimes we use "key={index}" logically its correct but react itself won't recommend to use index value for more info on this go to offical website https://legacy.reactjs.org/docs/lists-and-keys.html
- suppose if id misses in any object in that case temporary use index value but ask the backend developer to send id for each object using id is the best practise
- if u don't get id for each object in that case better use key={index} because instead of not using key better use key value as index

# episode-05

# why we need framework or library if everthing we can do with html,css,javascript?

- because a framework or library it makes developers experience easy it makes u write less code and do more things on web browser

# Folder Structure

- we have to keep all created components under src floder because complete source code will be there under src folder its a industry practise
- we can write number of components in one js file also but we are writting code for humans so if anybody see your code they should also understand your code easily so better to divid each component in each js file
- example suppose there 1000 components in your project u write everything in one js file its not good practise u need to structure your app proper way
- finally parcel will compress everything into one file when u do npm run build
- react won't recommend u to create specific file structure its upto u to create your own file structure for more info https://legacy.reactjs.org/docs/faq-structure.html
- while creating components some people create extension with ".js" or ".jsx" or ".ts" its doesn't matter u can keep anything but most of the projects u can see extension with ".js"
- it will make u zero diffrence if u make ".js" or ".jsx"
- always try to keep component name as file name example component name "Header" try to save File name as "Header.js"
- first you have to write export default "component name" then write import where u want to import the file
- never ever keep the hardcorded data in your component
- keep all hardcoded data under "util" folder here some people create folder name as "commom" or "config" its your wish but most name folder name as "util" because these are utilities we use across our components
- under util folder save file name start with small letter only example "mockData.js" because its not a component
- don't write more than 100 lines of code in each component(its good practise)

  # there are 2 types of exports and 2 types of imports

  1. default export(ex: export default "component name")
  2. named export(ex: if u want to export multiple things use named export export const "name" etc..)

  3. default import(ex: import Header from './component/Header' or import Header from './component/Header.js')
  4. named import(ex: import {Header} from '../util/Header' or import {Header} from '../util/Header.js')

  # Namasthe Food App Planning

/\*\*

- Header
- - Logo
- - nav items
- Body
- - Search
- - Resterant container
- - restro cards
-     - restroent name
-     - rating
- Footer
- - copy right
- - links
- - address
    \*/

    # React Hooks

    - hooks are normal JS utility function which comes with some super power that is given by react
    - there are 2 important hooks u will use 90% in your application
    - 1. useState() - super powerful state variable in react
    - useState is used to create local state variable
    - 2. useEffect()
    - whenever state variable updates react will rerender the component

    # episode -06

    # monolith architecture

    # microservice architecture

    # 2ways u can call api

    - page loads -> API call -> render UI
    - page loads -> render UI -> API Call -> ReRender UI
    - React follows 2nd approch it gives better user experience and here in react render cycle very fast

    # what is hook in React ?

    - hook nothing a normal javascript function which React give to us it contain its own specific use case where we use these functions

    # useEffect() hook

    - useEffect() has its own purpose its just like javascript function we import from react library

    # swiggy api call

    # shimmer UI

    # episode-07

    # use Effect()

    # create component shortcut in vs code

    - just type "rafce" and enter

    - if there is no dependency array in useEffect() it will every render cycle
    - if there is a dependency array "[]" in useEffect() it will call only in intial render(just once)
    - if there is a dependency array with "[btnNameReact]" it will call each time when btnNameReact updated

    # useState()

    - always create useState() inside component not outside the component
    - always write useState() on top of the component because javascript is single threaded language it executes code line by line react also understood properly if initilization do on top
    - never write useState() in if condition it doesn't throw any error by its not good practise to write useState() in if or for loop or function
    - if use useState() inside if sometimes the variable exist sometime it doesn't so it creates some inconsistent
    - whenever a function start with use its a react hook ex: useState & useEffect & useRouterError

    # routing configuration

    - official documentation of react router dom
      https://reactrouter.com/en/main/routers/create-browser-router

    - first install npm i "react-router-dom"
    - import "createBrowserRouter" in App.js
    - u have to do some configuration for createBrowserRouter that configuration is list of objects
    - create configuration inside approuter
    - configuration means some information it will define what will happen on specific route
    - each and every object defines path and what should happen on that path
    - you have to import "RouterProvider" from react router library and it provides routing configuration to the app
    - if there is any error u have to give errorelement
    - { path: "/", element: <AppLayout />, errorElement: <Error /> }
    - we use "useRouteError" for showing specfic error to user on the page
    - support in your app header and footer fixed and only body should be loaded in that case we use "children" in configuration
    - import "outlet" from react-router what it will do whenver any change in router it will be filled with children element according to the path
    - when u are using react u want to navigate from one page to another page don't use "anchor tag "because complete page will be refreshed if u use anchor tag
    - "Link" component has super power that react router dom gives us for navigating from one page to another page
    - when u use "Link" its just refresh the page not reloads the page and everything in one single page
    - "Link" when u see in developer console u see anchor tag behind the scene react uses anchor tag react keep eye on this anchor tag

    # Single Page Applcation

    - its a one page only components getting interchanged

    # 2 types of routing

    - client side routing -(ex: here there is no network call only component get replaced)
    - server side routing (Ex when u do navigation it will make a network call and redirect to one page)

    # dynamic routing
