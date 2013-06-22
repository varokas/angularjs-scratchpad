describe('nameCtrl', function() {
    var $scope = null;
    var ctrl = null;

    /* A mocked version of our service, someService
     * we're mocking this so we have total control and we're
     * testing this in isolation from any calls it might
     * be making.
     */
    var mockWindow = {
        location: {
            href: null
        }
    }

    //you need to indicate your module in a test
    beforeEach(module('myApp'));

    /* IMPORTANT!
     * this is where we're setting up the $scope and
     * calling the controller function on it, injecting
     * all the important bits, like our mockService */
    beforeEach(inject(function($rootScope, $controller) {
        //create a scope object for us to use.
        $scope = $rootScope.$new();

        //now run that scope through the controller function,
        //injecting any services or other injectables we need.
        ctrl = $controller('nameCtrl', {
            $scope: $scope,
            $window: mockWindow
        });
    }));

    it('should start with blank name', function() {
        expect($scope.name).toEqual('');
    });

    it('should redirect when submit', function() {
        $scope.doSubmit();
        expect(mockWindow.location.href).toEqual('index2.html');
    });

});