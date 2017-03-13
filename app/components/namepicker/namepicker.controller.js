angular.module('grabBagApp')
       .controller('namePickerCtrl', namePickerCtrl);

namePickerCtrl.$inject = ['$http', '$state'];

function namePickerCtrl($http, $state) {

    var ctrl = this;

    ctrl.people = [];

    ctrl.getPeople = function() {
        $http.get('/api/people').then(function(response) {
            ctrl.people = response.data;
            console.log('ctrl.people:', ctrl.people);
        });
    };

    ctrl.getPeople();

    ctrl.grabBagNames = [];
    ctrl.shuffleNames = shuffleNames;
    ctrl.loop = loop;
    ctrl.loopPressed = false;

    function shuffleNames (people){
      var namePicker = people.sort(function(){ return 0.5 - Math.random() });
      return namePicker;
    }

    function loop(){
        ctrl.namePicker = angular.copy(ctrl.people);
        ctrl.grabBagNames = ctrl.shuffleNames(ctrl.namePicker)
        while(ctrl.people[0].name == ctrl.grabBagNames[0].name &&
            ctrl.people[1].name == ctrl.grabBagNames[1].name &&
            ctrl.people[2].name == ctrl.grabBagNames[2].name &&
            ctrl.people[3].name == ctrl.grabBagNames[3].name &&
            ctrl.people[4].name == ctrl.grabBagNames[4].name &&
            ctrl.people[5].name == ctrl.grabBagNames[5].name &&
            ctrl.people[6].name == ctrl.grabBagNames[6].name &&
            ctrl.people[7].name == ctrl.grabBagNames[7].name &&
            ctrl.people[8].name == ctrl.grabBagNames[8].name &&
            ctrl.people[9].name == ctrl.grabBagNames[9].name){
            ctrl.grabBagNames = ctrl.shuffleNames(ctrl.grabBagNames);
            ctrl.loopPressed = true;
            return ctrl.grabBagNames;
      }
    }
};
