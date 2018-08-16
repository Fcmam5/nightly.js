# Contributor's Guide

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

## How Can I Contribute?

### Reporting Bugs

Found a bug? Or just suggesting an enhacement? Don't hesitate to open [an issue](https://github.com/Fcmam5/nightly.js/issues). Please make sure to provide a detailed description of that issue and/or the steps to reproduce the behavior.

Before making a PR, please open an issue so we can discuss the feature/change.

### Writing documentation or examples of "How to use Nightly.js"

Nighyly.js must be easy to use and user-friendly, maybe the current examples are not enough to get started for some users, you can help us by writing examples of usage, or a clear documentation.

Examples are in the [examples/](../examples/) folder. And documentation will be in [docs/](./docs) folder, and they must be referenced in a summary in [docs/README.md](./docs/README.md).

### Developing a feature

Before making a PR, please open an issue so we can discuss the feature/change.

## Pull requests

We are using [git-flow](https://github.com/nvie/gitflow) and [commit-zen](https://github.com/commitizen/cz-cli) with their default settings.

### Setup
* Fork [this repository](https://github.com/Fcmam5/nightly.js).
* Clone it `git clone https://github.com/YOUR_USERNAME/nightly.js.git` (make sure to replace `YOUR_USERNAME` with your Github username).
* Setup Your Upstream, change directory to the new nightly.js folder (`cd nightly.js`), then add a remote to the official rpeo `git remote add upstream https://github.com/Fcmam5/nightly.js.git`.

### Workflow

If you want to develop a new feature or a bug fix, etc. Make sure that your, create a new branch from `develop`, make sure to name it `feature/xxx`, or if it's a bug fix `fix/xxx` where `xxx` is a short description of the changes you are attempting to add.

```bash
# Switch to the develop branch
git checkout develop

# Make sure that your branch is up-to-date
git pull --rebase upstream develop

# Create a new branch 
git checkout -b [name_of_your_new_branch] #example: git checkout -b feature/darkify-textarea

# ... commit your changes

# push to your fork
git push origin develop

```

*Optional: Use [git-flow](https://github.com/nvie/gitflow) and [commit-zen](https://github.com/commitizen/cz-cli)*

Then submit a pull request.

### Example: Contribute by adding the night mode for a DOM element

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
      for (var i = 0; i < this.myEleemnt.length; i++) {
      this.myEleemnt[i].style.color = this.nightMode.myEleemnt;
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
You can review [this commit (develop/ 8ac80bd)](https://github.com/Fcmam5/nightly.js/commit/2c0a4f3d3a56930df4a90c085dc3e5d74b3d5917#diff-0cf5246c56bd96bfd6765c8d471aa115) where we covered the `<textarea>` element.
