var expect = chai.expect;
describe('Loading Nightly.js', function () {
    describe('Instiantiation', function () {
        it('Should load window.Nightly', function () {
            expect(window.Nightly).to.be.not.null;
        });

        it('Should instantiate Nightly.js object without paramters', function () {
            expect(typeof new Nightly()).to.be.equal('object')
        });
    })

    describe('Darkify function should work', function () {

    });
});
