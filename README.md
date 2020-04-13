# Nightly.js

[![GitHub license](https://img.shields.io/github/license/Fcmam5/nightly.js.svg)](https://github.com/Fcmam5/nightly.js/blob/master/LICENSE)
[![dependencies Status](https://david-dm.org/Fcmam5/nightly.js/status.png)](https://github.com/Fcmam5/nightly.js)
[![npm version](https://badge.fury.io/js/nightly.js.png)](https://www.npmjs.com/package/nightly.js)
[![Open Source Helpers](https://www.codetriage.com/fcmam5/nightly.js/badges/users.svg)](https://www.codetriage.com/fcmam5/nightly.js)

<p align="center">
<img width="200" height="200" src="./docs/logo.png">
</p>

A zero dependency Javascript library for enabling dark/night mode in you UI.

## Usage

1. Include Nightly.js

- Via `<script/>` tag

  ```html
  <!-- Download this repository then use "dist/nightly.min.js" -->
  <script src="nightly.min.js"></script>

  <!-- Or use CDN -->
  <script src="https://cdn.jsdelivr.net/gh/fcmam5/nightly.js@v1.0/dist/nightly.min.js"></script>
  ```

- Or if you prefer [npm](https://www.npmjs.com/package/nightly.js):

  ```
  npm install --save nightly.js
  ```

  Then include it

  ```javascript
  var Nightly = require('nightly.js');
  ```

2. In you main Javascript file initiate the object

   - Using default Parameters with persistence disabled:

     ```javascript
     var Nightly = new Nightly();
     ```

   - Or can customize your parameters

     _The first parameter is to customize default settings and the second is to enable persistence_

     ```javascript
     var nightModeConfig = {
       body: 'backgorund color', // Default: #282828
       texts: 'texts color', // Default: #f5f5f5
       inputs: {
         color: 'text color inside inputs', // Default: #f5f5f5
         backgroundColor: 'background color', // Default #313131
       },
       buttons: {
         color: "button's text color", // Default: #f5f5f5
         backgroundColor: "button's backgournd color", // #757575
       },
       links: 'links color (normal state)', // Default: #009688
       classes: [
         // Classes to apply when enabling the dark mode on certain elements
         {
           apply: 'my-selected-class', // just the class name (without the .)
           to: '.my-dark-class-to-the-selected-class .some-nested-class', // uses querySelectorAll
         },
         {
           apply: 'another-selected-class',
           to:
             '.another-dark-class-to-the-selected-class.some-class .some-nested-class',
         },
       ],
     };

     var Nightly = new Nightly(nightModeConfig, true); // To disable persistence, set false instead of true
     ```

3. Call the `darkify()` or the `toggle()` function

```javascript
// To enable the dark mode
Nightly.darkify();

// To disable the dark mode
Nightly.lightify();

// Toggle between dark and light mode
Nightly.toggle();
```

- You can also pass callbacks to `darkify()`, `lightify()`.
  And `toggle()` takes two callbacks (enableDarkModeCallback, enableLightModeCallback), for example:

```javascript
var sayGoodMorning = function () {
  console.log('Good morning !');
};

var sayGoodNight = function () {
  console.log('Good night!');
};

// Pass sayGoodMorning() as callback to darkify
Nightly.darkify(sayGoodMorning);

// toggle() takes two callbacks (darkifyCallback, lightifyCallback)
Nightly.toggle(sayGoodNight, sayGoodMorning);
```

### Example

In our [first example](./examples/plain-markup.html) we created a simple page as the following:

```html
<style media="screen">
  body {
    padding: 50px;
  }
  #btn {
    height: 50px;
    width: 150px;
  }
  .red-text {
    color: #d32f2f;
  }
</style>

<h1>
  Hello, world <span class="red-text">!</span>
  <button type="button" name="button" id="btn">Toggle</button>
</h1>

<p>Please, <a href="#">Click here</a></p>

<div id="form-container">
  <form>
    <label for="name">Your name</label>
    <input type="text" name="name" value="Hello world" placeholder="name" />
  </form>
</div>
```

Then The result was as the following:

![Before using Nightly.js](https://i.imgur.com/SFcqS3E.png 'Before using Nightly.js')

We included `nightly.js` just before closing the `body` tag, we initiate Nightly object with no arguments,
then we set an event listener to a button to execute our `toggle()` method, that switches between `darkify()` and `lightify()`

```html
<script src="../src/nightly.js" charset="utf-8"></script>
<script type="text/javascript">
  // Persistence disabled
  var Nightly = new Nightly();
  document.getElementById("btn").addEventListener("click", function(){
    Nightly.toggle();
  });

</script>
</body>
```

The result was as the following:

![After using Nightly.js](https://i.imgur.com/uGHUsL0.png 'After using Nightly.js')

## TODO

- [x] Add state persistence: use localstorage
- [ ] Add supported browsers section after testing it
- [ ] Improve [usage](#usage) section
- [ ] Document and refactor the code
- [ ] Continue writing tests
- [ ] Write plugins for frameworks like Bootstrap - [ ] Bootstrap - [ ] Foundation - [ ] Materialize

## License

This project is licensed under the GNU GPL v3.0 License - see the [LICENSE](./LICENSE) file for details
