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

  # 2 ways u can import

  -      import user from './user';
  -      import userFunctionComponent from './user';

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
-       import {useEffect} from 'react';
- it will be called each time when component renders
-       useEffect(()=> {});
- it will be called only when render cycle completed (intial render time)
-       useEffect(()=> {}, []);
- it will be called each time when local state variable(count) changes
-       useEffect(()=> {}, [count]);
- it will be called each time when local state variable(count) changes
-       useEffect(()=> {}, [count2]);
- it will be called for component cleaning purpose
-       useEffect(()=> {
        const timer = setInterval(() => {}, 2000);
        return () => { clearInterval(timer);}
        }, []);

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
-       import {useState} from 'react';
-       const [count, setCount] = useState(0);
-       const arr = useState(0);
        const [count, setCount] = arr;
-       const arr = useState(0);
        const count = arr[0];
        const setCount = arr[1];

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

# Episode - 08

# class Based Component

- most of interviwers will ask class based component because there are older project where class based components used
- if u understand class based components understanding react will be easy
- u will understand React life cycle easily
- class based component is a normal javascript class which extends with react.component and which has render() method which return some piece of jsx
- React.component is a class which react give to us and inherting some properties from that class using extend keyword and it comes from react library
- you always should use this keyword for props so that u can access in entire class component
- when you are loading function based component means u are invoking or mounting that component on the web page
- when you are loading class based component means u are creating instance of the class
- unlike function based component we write all state variables inside one object only
- suppose u have more state variables in state object
- whenever u write with this keyword it will be shared with all methods
-      this.state = {count:0, count1:1}

- if u are updating only one state variable using this.setState(this.state.count++) then it will update only first state variable it won't touch remaining variables

# React Licycle method diagram

Refer Link
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

# componentDidMount

- it will be called only after componenet mounted(loaded) on the web page
-       componentDidMount() {
          setInterval(() => {
            console.log("hello react");
          })
          const data = 2;
          this.setState({
            count:data
          })
        }

# componentDidUpdate

- this method will be called after update the state variable and update the dom with latest api data then it will call componentDidUpdate
- when state variable update every time componentDidUpdate will be called
-       componentDidUpdate(prevProp, prevState) {
          if(this.state.count !== prevState.count) {

          }
          if(this.state.count2 !== prevState.count2) {

          }
        }

# componentWillUnmount

- mounting meaning adding ui in browser and unmounting means removing page from UI
- before browser remove Ui from webpage componentWillUnaount will remove that page
- lot of things u will remove before leaving the page
- u can see example by adding setinterval in componentDidAmount() method
- example you are going from aboutus page to contactus page as soon as u go to contactus page componentWillUnmount will remove aboutus page from DOM(web page)

- Never ever Compare React LifeCycle method to functional components both are diffrent

-       componentWillUnmount() {
          clearInterval(this.timer);
        }

# single page application problem

- example u can use setInterval() do experiment

# episode - 09

# custom hooks

# why do we need custom hooks

- readbility
- reusability
- it makes your code more testable (i can write separate test cases for helper functions)
- (example) - when iam writing test cases for body component no need to worry about helper function test cases i don't need to write test cases in body component whether filter working or not because we write separate test cases for filter function
- it make our code maintainable(easy to debug)
- (example) suppose there is any issue in filter logic if u write it separetly u can fix the things quickly otherwise searching filter fucntion in component only take alot of time
- hook is just a function
- our code is moduluer means brokendown our code into meaningfull pieces
- our components are moduluer means created components into smaller chunks (every component has its own responsibility)
- always create hook with the name of "use" infront of it thats react way of knowing its hook
- when u are creating hook start firstletter with small "u"
- better keep default export for hook because we only export one hook(it make sense)
- helper file u can make named export because we can export many helper functions from that file

- hook are normal functions only we just extract some logic out in diffrent function
- custom hook which return some piece of javascript or u can say object,or data
- whenever u add eventlistner in code when u are leaving that page its good practise to cleanup that eventlistner

# Lazy Loading or On Demand Loading

- some people call chunking,code splitting, dynamic bundling, lazy loading all are same
- you have to keep your bundle size small still logical
- basically in large scale application we build bundler based on the use case(its upon developer wisdom)
- when i will be building any website i will use code spliting and make sure bundler won't contain some random code(logical bundling)
- example take makemytrip website when u click on railways only railway bundler should be loaded when u click on buses only bused related bundler should run this is known as Ondemand loading
- makemytrip images all adding using cdn link(should check how to add)
- paytm also recharge one bundler and upi also one bundler etc..
- when u are loading components on-demand react try to suspend loading
- its still SPA so once bundler loaded again it won't take time because its already bundle once
- when u write component inside Suspense react knows it will be loading lazy so react auto magically handle this behind the scene
- never ever load components dynamically inside another component
- wherever you do import component there only do the lazy loading

# Episode -10

# many ways we can write css

1. Normal Native css (adding everthing in index.css)
2. Scss (using index.scss)
3. inline css (advantage of writing css inline is saving time)
4. component Libraries (bootstrap,material UI,Chakra,base UIits newer and faster way for building apps)
5. styled-components(https://styled-components.com/)
6. Tailwind css frameWork

# why we do need css framework

- primary reason we need optimized css and second thing is it saves time
- development becomes faster when u use framwork(ex: Tailwind)
- advantage of using scss is nesting,mixins,variables,reusability
- scss is finally converted into css only
- internal css is not good way of writing because its diffcult to maintain and we can't reuse it again
- the job of processing is heavy for browser for understanding(always avoid internal css)

# why we need to use material UI or any library

# Pros

- if suppose lot of developers working in one project so everybody can use same design UI there is consistency in the project
- easy to use
- it gives us some built in components we can reuse that
- no need to focus on css much
- to maintain consistent UI
- none of the library is best as well as worst it depends on requirment what u will prefer because some company prepare antdesign some company prepare materialUI and some company prefer to build there own css library

# can we use multiple css libraries ?

- yes of course because at the end of the day all are packages so you can install and use it but its not good practise to use multiple libraries in one project because one button u take from one library another one from another library so its not recommend practise and you have to maintain consistency in your project

# cons

- it makes bundle size heavy
- we loose our control on design (person customization becomes hard)
- ex: suppose if i use "material ui" i have to maintain design as per material UI only

# Tailwind css

- best documentation for refer tailwind https://tailwindcss.com/
- its open source css framework and tailwind comes with the mix of things
- it says that u can write CSS on the go(in the same file write html & css)
- its having reusability
- comes with lot of prebuilt classes u can automatically build
- less bundle size as its minimal css that offer to us
- its very flexible UI(its very much customizable)
- tailwind css says write it in my way how i tell u to write i will override everything
- basically u have to write it in Tailwind style
- tailwind css works with just class names only
- we need to create postcssrc file and do some configuration because while bundleing your app u need to tell parcel like u are using tailwing inside your project and compile tailwind css into normal css
- when u use tailwind css nothing should be there in index.css only 3 lines should be there (refer documentation)
- why we import 3lines in index.css because this is the place where u can tell u are using tailwing and u will be importing classes from its base,component,utilility from tailwind
- here tailwind also divided its classes into base,component,utility
- use Tailwind CSS IntelliSense extension it will give suggestions to add tailwind class names
- if extension not showing suggestion do ctrl + space
- suppose u want to give exact pixels which tailwind wont offer then use like this w-[200px]
- u can check tailwind css in network so here parcel taking help from postcss and tailwind and compile all those classes and ship it into our project
- tailwing only include classes u used in project shipped to production that's why bundle size is less
- even when u add dynamic class (ex: w-[200px]) it will add those classes also in bundle
- tailwind u no need to worry about writing classnames just we can use tailwind classnames
- suppose u writing tailwind classNames again and again but when it bundles its showes only one time

# media queries in tailwind

- normal we write css for 3types of device small(phone),medium(tab),large(desktop)
- tailwind we write sm:bg-blue-50 as soon as it crosses size of small device it changes color to blue same for medium and large screens

# Tailwind Pros

- code is less
- no duplicate css
- bundle size is small
- faster development(don't have to switch to css and html like that)
- easy to debug (easy to use)
- u can customize as u want
- with jsx and tailwind u don't have to go outside the javascript we do everything in js file

# TailWind Cons

- it comes with learning curve(suppose outside very less developer know it so first it will take some time to understand it)
- it also makes our code little ugly

# episode-11

# UI Layer

# Data Layer

# State (local variable)

- suppose there is a container and u want variable which has scope within that container known as state

# Props

- sending data from Parent to Child we use Props
- passing data from one component(element) from another component(element) we use props
-       <Restacard {...res.data}>
- install react developer tool chrome extension
- after installing there is a option to select component there u can see component structure u can say like mini virtual Dom
- this tool will help u to debug the data layer(u can see props data)

# Props Drilling

- sending data from parent -> child -> child -> child this chaining known as "Props Drilling"
- basically u are driiling all props for accessing props

# disadvantage of props Drilling

- suppose u are sending data from parent - child through 10 component remaining 10 components not using that data but still u are sending it so its not good way
- suppose u change one thing in single component one time props so it will rerender all component which are using that porps unnessarily and it makes our code cluttered

# Child to Parent

- very few cases u need to send data from child to parent
- we can use custom hook but all times its not good practise
- data managment decide ur app reusable and use data wisily structure it properly
- we build 2 types of accordian basic accordian and closed accordian
- we can't change the sibiling of another state component

# Lifting the state up

- example given accordian

# profiler(React developer tool extension)

- here you are having option to start recording and stop recording
- so here u can see how much time each component took to load
- with these small things u can make your app performence better
- always try to use less libraries as possible (if u use shimmer from external it take more time compare to own created shimmer)
- its for development purpose and u can't see in production there is separate thing in production
- if u create global variable for storing data react can't watch it and won't run reconcilation alogaritham
- for storing data centrly we can use local storage but its storage in browser and updating localstorage heavy and costly operation

# context(createContext & useContext)

- i want some piece of data accessiable anywhere in my app for that we use react context
- useContext at end of the hook and hook at end of the its javascript function
- state and props are tied to the component but context not tied to component u can store it central place and use anywhere in your component
- this is so easy then drilling props
- context like useState for your whole big application u can use context wherever u wish to its like datastore
- using UserContext.provide u can pass data dynamically and overide default values

# why do we need state & props can i use context everywhere?

- No because state and props tied to the component. context is central storage so u don't use context everything
- only use context for data which is required all across your appliction in diffrent diffrent places

# why i keep usercontext.provider inside all components?

- because u use central stored data all your components and dynamically data is updated then that data should be updated where u use the usecontext
- and u can use usecontext for small protion of app as well
- by using same useContext i can diffrent data in diffrent place but logically u should not do this
- Ui layer tailwind making super powerful
- data layer modifying props and state usecontext
- example suppose when u do any changes and update usecontext data and when u go to aboutus u can see updated data in that component the abouts component we loaded lazy and still we are able to see updated data
- because here UI layer and data are diffrent they works parrelly and independently here data layer stays and ui layer do rendering and run reconciliation algoritham all staff

# episode - 12

- There are 2 types of layers

1. UI layer

- what u see in browser is UI layer the view of the webpage we called UI layer

2. Data layer

- passing data from one component to another component and state managment,using context all are part of Data layer

# why do we use useContext

- to avoiding prop drilling

# when can we use react context?

- we can use for login info and dark theme and white theme and for cart and for wishlist we can use react context

# to make full fledged application make performent only react can do that?

- no react can't do that u need lot of libraries and tools (we need bundler, routerdom for router, package for testing)

# when do we use context and when do we use Redux?

- if u are building small application and for managing data u can use react context
- some people use context for large scale application also that's f9 but when your application grows u will have so many contexts and so many things happening so redux give u proper way of handing, managing, reading and modifying data
- lot of companies choose redux and some of companies choose alternative of redux store

# Redux

- suppose u are building small application and in the application handling data is very easy and u can manage data using state and props and other things.so u don't need to worry much about data
- but in large sclae production ready application handling data is very important thing and it becomes very critical
  for that most companies use Library "Redux"
- to manage our data properly we can use redux insteading of creating diffrent or multiple contexts we can create redux store
- redux is used for data managment
- if u are building small applications u don't need redux
- redux has its own importance so only use it if you are buidling large scale application which invovles alot of data handling
- redux and react is completely diffrent redux is not part of react
- redux has come of with something known as "ReactToolKit" (https://redux-toolkit.js.org/)
- for all application u use "Redux Toolkit" only because "Redux Store" configuring setup is very complex and old way
- redux store at end of day big object which has diffrent section those sections are small pieces
- redux store also not tied to any component and u can access from anywhere in your application because like context api Redux also store data centrally
- each store can have diffrent slices of store
- it can have useSlice and authenticationSlice and CardSlice etc.. we can multiple such slices like this
- slice is small portion of your store
- suppose u have book big fledged store its broken down to small slices
- our components directly can't modify our store
- i will have to dispatch an action (lets add one action name addItem)
- so that action will call a normal javascript function this function known as "reducer" and this function will modify the store
- example suppose in food orderering app when u click + button its dispatching action which call reducer fucntion which update the slice of redux store

# why we can't modify redux store directly?

- when u have large scale application u don't want random component to randomly modify your store. we need to keep track of everything

# can we use multiple redux store?

- no everything u will keep in one redux store
- login data and cart data and wishlist data everything will keep in store its not bad practise because we will create slices of our store

# advantages of Redux

- we need Redux for managing our data layer(handling huge amount of data)
- suppose u r building large scale application where browser holds large amount of data in that place where you use redux for handling that data

# cons of Redux

- its very complex to setup
- it has huge learning curve(u need to learn lot of things)
- it was very complicated
- there were lot of code u used to do copy paste

# why we need to install 2 library

- because redux-toolkit its core library of the redux and "react-redux" is bridge between react and redux

# episode -13 (testing)

- before testing library people used to write test cases in Enzyme

1. diffrence between json and javascript object?

# React Testing Library

- reference https://testing-library.com/docs/react-testing-library/intro/
- it build top on jest and it uses jest behind the scene

# why do we use Headless browser? (read more about it by own)

- headless browser testing will become very fast because there is head and here no need to paint on the browser. there will be run on diffrent browser

# what is test driven development?

- we write test cases even before we write code known as test driven development

# writing test driven development good or bad?

- its very good because our test coverge will be always 100% and will get lot of confidence but development will become very slow but quality of code will be improved and many companies won't focus on this much

# Why do we write test cases?

- if we are adding new fetures are we breaking existing features that's why writing test cases gives confidence

# unit testing & integration testing

- we write some code to test the development code known as automatic testing
- its core job of the developer
- we will write test cases for each small unit
- example here will write test cases for whether my logo showing properly or not and button working or not etc..
- we as a developer mainly focus on unit testing and integration testing
- testing also like development only it takes time to write test cases
- if u don't become expert in testing that's f9 but u should know the minimum testing

# React Testing Library

- its part of testing library there is something known as Testing library which offer testing in react, angular etc..
- we use jest for writing test cases(javscript testing framework)

1. install react testing library

-       npm install --save-dev @testing-library/react

2. install jest

-       npm i -D jest

3. configure jest (create jest.config file)

-       npx jest --init
- we just want to do it once(because i want to create jest.config file once) that's why we use npx

4. run command for testing

-       npm run jest

5. we face error because jest version more than 28 need to install jest enviorment jsdom

-       npm i -D jest-environment-jsdom
- after installing do "npm run jest" it will work

6. create first testing file

- u have to create folder like **test**(its also known as dhunder) because whatever files u create inside this folder jest consider those files as testing fiels
- there is convention used in industry for creating test file use like sum.test.js and here u can create sum.spec.ts as well but u can create in any way
- if u use sum.test.js and sum.js there u can understand easily like there sum.js file and for that there is testing file sum.test.js so better maintain standards

7. write first test case example

-     import {sum} from "../sum";
      test('sum of 2 numbers', ()=> {
        expect(sum(2,3)).toBe(5)
      })

- here u no need to import test and expect function in jest latest verion in old version we used to import

- here first u have to test function which will receive 2 arguments first one name of test case and 2nd one is arrow function and inside arrow function u write always expect function and inside that function write method which u written in component here i have written sum function then toBe(5) written 5

8.  you will face one error here because jest default wont find out "import" so u have to install babel-jest so babel will make jest understand there is something known as "import" u have written Es6

-     npm install --save-dev babel-jest @babel/core @babel/preset-env
- u have to create config file with name of babel.config.js or .babelsrc file
-       module.exports = {
                           presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
                          };
- or if u do configuration in .babelsrc file u have to do it in json format this file accept json format
  here javascript object and json both diffrent and .babelsrc we use for removing all console.logs
-        {
           "presets": [['@babel/preset-env', {"targets": {"node": 'current'}}]],
         };
- there will be coverge folder which gives the coverage report
- gitignore coverage report for avoiding in git commit
- we are not running test on browser we are running on jsdom and it doesn't have root. here testing library gives u render function there u can render your component inside of that function only that component will be rendered
- here after adding component in render function u will face issue like "jsx not allowed" so u should add below configuration in .babelsrc or babel.config whichever u create
-      {
          "presets": [
                       ["@babel/preset-env", { "targets": { "node": "current" } }],
                       ["@babel/preset-react", { "runtime": "automatic" }]
                     ]
       }
- then install preset-react library using below npm command
-        npm i -D @babel/preset-react
- then if u face issue with "useSelector()" u have to create actual store in testing file
-        import {Provider} from 'react-redux';
-        <Provider store={store}><Header></Provider>
- if u face issue with router because jest wont understand your link tag so createBrowserRouter() won't work because testing file is like a container not a browser instead of that we use StaticRouter and router can work without browser load
-       import {StaticRouter} from 'react-router-dom/server'
- if u face issue with fetch then here we jest don't know about fetch because here fetch given by browser so idealy u should not make an api call in testing we will use mock data for testing now we will mock our fetch in testing file. using jest we created dummy function see below line
-     global.fetch = jest.fn()
- here global.fetch means here we have created our own dummy fetch and attached to the global object now my code automatically understand what is happening inside fetch
- fetch() actually it return a promise
- after return a promise with readable stream data
- if u want to run test cases in autosave mode add below line in package.json
-      "scripts": {
                    "watch": "jest --watch"
                  }
-       npm run watch
- if u use tobeDocument() in test cases u will face error like tobeDocument() not a function so install jest-dom
-      import '@testing-library/jest-dom'
-      npm i -D @testing-library/jest-dom
- suppose u are using direct image url it will work directly but if u import image from assest from it will give error because directly if u use url it will javascript string but png file it won't recognize that's why u have to create dummy.png
- here jest will help us so u need to do configuration in jest.config file
-         moduleNameWrapper: {
              "\\.(png|jpg|svg)$":"../mock/dummyLogo.js"
          }
