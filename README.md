# react-bundle
 - npm install create-react-app@2 -g
 - create-react-app react-guide
 - cd react-guide
 - npm start (starts a development server)
 - http://localhost:3000/
 - npm run build
 


 ## Create a single element 

 ```javascript
 class App extends Component {
  render() {
   
    return React.createElement('div', {className: 'App-header'}, "this is div", React.createElement('h1', null, "this is the nested h1 element"));
  }
}
```
- The above is replaced by the JSX syntatic sugar 
- class keyword for html elements must be replaced by className due the use of class object


## Creating a functional element 

