// var expect = chai.expect;
var expect = typeof require !== 'undefined' ? require('chai').expect : chai.expect;


describe('Loading Nightly.js', function () {

    beforeEach(function () {
        // Default colors set in 'src/nightly.js:25'
        this.defaults = {
            nightMode: {
                body: "#282828",
                texts: "#f5f5f5",
                inputs: { color: '#f5f5f5', backgroundColor: "#313131" },
                buttons: { color: "#f5f5f5", backgroundColor: "#757575" },
                textareas: { color: '#f5f5f5', backgroundColor: "#313131" },
                links: "#009688",
                classes: [],
                isTwbs3: false
            },
        }
    })

    describe('Instiantiation', function () {
        it('Should load window.Nightly', function () {
            expect(window.Nightly).to.be.not.null;
        });

        it('Should instantiate Nightly.js object without paramters', function () {
            var nightly = new Nightly();
            expect(nightly).to.be.an('object')
            expect(nightly.nightMode.body).to.be.equal(this.defaults.nightMode.body);
        });
    });

    describe('Darkify function should work', function () {
        beforeEach(function () {
            this.nightly = new Nightly();
        });

        it('Darkify is a function', function () {
            expect(this.nightly.darkify).to.be.a('function');
        });

        it('darkify() won\'t work if isDark is true', function () {
            var bgColor = document.body.style.backgroundColor;
            expect(document.body.style.backgroundColor).to.be.equal(bgColor);
            expect(this.nightly.isDark).to.satisfy(function(value) {
                return value === null || value === false;
            });
            this.nightly.isDark = true;
            // Running darkify() must not break the test
            this.nightly.darkify();
            expect(this.nightly.isDark).to.be.true;
            expect(document.body.style.backgroundColor).to.be.equal(bgColor);
            // Cleanup
            this.nightly.isDark = false;
        });

        it('darkify() will work if isDark is false', function () {
            var bgColor = document.body.style.backgroundColor;
            expect(document.body.style.backgroundColor).to.be.equal(bgColor);
            expect(this.nightly.isDark).to.satisfy(function(value) {
                return value === null || value === false;
            });
            
            this.nightly.darkify();
            
            expect(this.nightly.isDark).to.be.true;
            expect(document.body.style.backgroundColor).to.not.equal(bgColor);
            // Cleanup
            this.nightly.lightify();
        });


    });
});
