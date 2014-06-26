import Router from 'example/router';

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
        expect(2).eql(2);
        Router.renderComponent(container);
        expect(2).eql($("ul li a").length);
        var first = $("ul li:eq(0) a");
        expect(first.text()).eql("introduction to react");
        React.addons.TestUtils.Simulate.click(first.get(0));
        setTimeout(function() {
            var details = $("div .Session h2").length;
            expect(details).eql(1);
            var name = $("div .Session h2:eq(0)").text();
            expect(name).eql("Session: introduction to react");
            done();
        }, 0);
    });

});
