angular.module('grabBagApp')
    .config(function($stateProvider) {


        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "home.html"
            })
            .state('namepicker', {
                url: "/namepicker",
                templateUrl: "components/namepicker/namepicker.html",
                controller: "namePickerCtrl as ctrl"
            })

    });
