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
      while(ctrl.people[0].name == ctrl.namePicker[0].name &&
        ctrl.people[1].name == ctrl.namePicker[1].name &&
        ctrl.people[2].name == ctrl.namePicker[2].name &&
        ctrl.people[3].name == ctrl.namePicker[3].name &&
        ctrl.people[4].name == ctrl.namePicker[4].name &&
        ctrl.people[5].name == ctrl.namePicker[5].name &&
        ctrl.people[6].name == ctrl.namePicker[6].name &&
        ctrl.people[7].name == ctrl.namePicker[7].name &&
        ctrl.people[8].name == ctrl.namePicker[8].name &&
        ctrl.people[9].name == ctrl.namePicker[9].name){
        ctrl.grabBagNames = ctrl.shuffleNames(ctrl.namePicker);
        ctrl.loopPressed = true;
        return ctrl.grabBagNames;
      }
    }
};
