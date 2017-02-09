(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
        .html5Mode({
            enabled: true,          /* true: hashbang URLs are disabled, meaning users will see clean URLs without the hashbang */
            requireBase: false      /* unrelated to the hashbang issue, but is one way to avoid a common $location error */
        });
        /* need to know how to configure at least four aspects of a state: its name, URL route, controller, and template */
        /* $stateProvider calls .state(), which takes two arguments: stateName and stateConfig, stateName is a unique */
        /* string that identifies a state, stateConfig is an object that defines specific properties of the state */
        $stateProvider
            .state('home', {                            /* create a state named home and add an accompanying URL */
                url: '/',
                controller: 'HomeCtrl as home',         /* add controller property to the home state */
                templateUrl: '/templates/home.html'
            });
    }


angular
    .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
    .config(config);
})();