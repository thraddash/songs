[![Node version][node-shield]][node-url]
[![npm version][npm-shield]][npm-url]
[![GitHub commit activity][commits-shield]][commits-url]

# Songs React-Redux App

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#initial-setup">Initial Setup</a></li>
        <li><a href="#b">B</a></li>
        <li><a href="#c">C</a></li>
        <li><a href="#d">D</a></li>
        <li><a href="#e">E</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#starting-the-app">Starting the App</a></li>

  </ol>
</details>

## About the Project
- <b>[SongList component]</b> - hardcoded list of songs with select button (left side of the screen) 
- <b>[SongDetail component]</b> - details song title, length of song (right side of the screen) 
- <b>npm install --save redux react-redux</b>

## Initial Setup
<details>
  <summary>(/src/index.js) (/src/App.js) (/public/index.html)</summary>
  
### /src/index.js
```node
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.querySelector('#root'));
```

### /src/components/App.js
 ```node
import React from 'react';

const App = () => {
    return <div>App</div>;
};

export default App;
```

### /public/index.html add stylesheet semantic ui css
https://cdnjs.com/libraries/semantic-ui
```node
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
```
</details>

## B
<details>
  <summary>B</summary>
  
</details>

## C
<details>
  <summary>C</summary>
  
</details>

## D
<details>
  <summary>D</summary>
  
</details>

## E
<details>
  <summary>E</summary>
  
</details>

<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these simple steps.

### Prerequisites
1. node v14.15.5 installed
2. npm 6.14.11 installed
3. npm install --save redux react-redux
 
### Starting the App

1. Clone the repo
   ```sh
   git clone https://github.com/thraddash/widgets.git
   ```
2. npm install
   ```
   install npm modules from package.json
   ```
3. npm start
   ```
   Runs the app in the development mode.
   Open http://localhost:3000 to view it in the browser.
   ``` 
  
<!-- MARKDOWN LINKS & IMAGES -->
[node-shield]: https://img.shields.io/badge/node-v14.15.5-blue
[node-url]: https://nodejs.org/
[npm-shield]: https://img.shields.io/badge/npm-v6.14.11-orange
[npm-url]: https://www.npmjs.com/package/npm-install
[commits-shield]: https://img.shields.io/badge/commits-30-green.svg
[commits-url]: https://img.shields.io/github/commit-activity/y/thraddash/songs
[product-screenshot]: /src/images/

