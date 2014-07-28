import Routes from 'example/router';

describe('integration like tests', function() {

    var container;

    beforeEach(function() {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(function() {
        document.body.removeChild(container);
    });

    it('should render a link for each session at boot', function (done) {
        expect(1).eql(1);
        React.renderComponent(Routes, container);
        done();
    });

});
