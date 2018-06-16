// var expect = chai.expect;
var expect = typeof require !== 'undefined' ? require('chai').expect: chai.expect;
describe('Loading Nightly.js', function () {
    describe('Instiantiation', function () {
        it('Should load window.Nightly', function () {
            expect(window.Nightly).to.be.not.null;
        });

        it('Should instantiate Nightly.js object without paramters', function () {
            expect(new Nightly()).to.be.an('object')
        });
    })
    describe('Darkify function should work', function () {
        beforeEach(function() {
            this.nightly = new Nightly();
        });

        it('Enables the night mode', function(){
            expect(this.nightly.darkify).to.be.a('function');
        });

    });
});
