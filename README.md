# Nightly.js

## Usage

1. Include `nightly.js` file
2. In you main Javascript file initiate the object then call the `darkify()` or the `toggle()` function

### Example

In our [first example](./examples/plain-markup.html) we created a simple page as the following:
```html
<style media="screen">
  body { padding: 50px; }
  #btn { height: 50px; width: 150px;}
  .red-text {color: #D32F2F;}
</style>

<h1>
  Hello, world <span class="red-text">!</span>
  <button type="button" name="button" id="btn">Toggle</button>
</h1>

<p>Please, <a href="#">Click here</a></p>

<div id="form-container">
  <form>
    <label for="name">Your name</label>
    <input type="text" name="name" value="Hello world" placeholder="name">
  </form>
</div>
```

Then The result was as the following:

![Before using Nightly.js](https://i.imgur.com/SFcqS3E.png "Before using Nightly.js")

We included `nightly.js` just before closing the `body` tag, we initiate Nightly object with no arguments,
then we set an event listener to a button to execute our `toggle()` method, that switches between `darkify()` and `lightify()`

```html
<script src="../src/nightly.js" charset="utf-8"></script>
<script type="text/javascript">
  var Nightly = new Nightly();
  document.getElementById("btn").addEventListener("click", function(){
    Nightly.toggle();
  });

</script>
</body>
```

The result was as the following:

![After using Nightly.js](https://i.imgur.com/uGHUsL0.png "After using Nightly.js")

## License
This project is licensed under the GNU GPL v3.0 License - see the [LICENSE](./LICENSE) file for details
