# Contributor's Guide
=======

Before making a PR, please open an issue so we can discuss the feature/change.

## Install

Clone the repository:

```shell
git clone https://github.com/Fcmam5/nightly.js.git && cd nightly.js
```


## Workflow

Source files are located in `src/`. Tests are located in `test/`.

### Styling a new element

For example, `<myElement>` element is not covered by `nightly.js` and it doesn't change when activating the mode,
so you wanted to contribute by adding it to the library.
* [Open an issue](https://github.com/Fcmam5/nightly.js/issues/new) to inform us that you're working on this, and so we can discuss it.
* In `src/nightly.js` we gonna add the defaults values of our dark style for the element, save the initial style and set/reset the stles.
  * First, add the default values of your style under:
    ```javascript
    var defaults = {
      nightMode: {
        ...
        myElement: '#COLOR',
        ...
      }
    }
    ```
  * Second, initialize `Nightly` attributes
    ```javascript
    var Nightly = function(nightMode, nightCallback, dayCallback) {
      ...
      this.nightMode = !nightMode ? defaults.nightMode : {
        // add myElement here
        myElement: nightMode.myElement || defaults.nightMode.myElement,
        ...
      }
      // and thi
      this.myElement = document.getElementsByTagName('myElement');
    }
    ```
  * Third, from `darkify()` method, we update the `initialTheme` object
    ```javascript
    this.darkify = function() {
      this.isDark = true;
      this.initialTheme = {
        myElement: document.body.style.color // or document.body.style.backgroundColor
      }
    }
    ```
  * Then, we loop over all the elements of `this.myEleemnt` then we apply our style

    ```javascript
    for (elm of this.myEleemnt) {
      elm.style.color = this.nightMode.myEleemnt;
    }
    ```
  * Don't forget to recover the initial style in `lightify()`

    ```javascript
      this.lightify = function() {
        ...
        for (elm of this.myEleemnt) {
          elm.style.color = this.initialTheme.myEleemnt.color;
        }
      }
    ```
You can review [this commit (HASH)](#) where we covered the `<select>` and `<option>` elements.

### Using the night mode for a certain framework
You can take Twitter Bootstrap 3 as example, we're passing `isTwbs3` argument, if it's true we execute `twbs3Darkify()` were we gonna add styles and classes, feel free to add/edit your preferred web framework, or **feel free to write your plugin for nightly.js**.
