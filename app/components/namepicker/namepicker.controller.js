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
      for(var i = 0; i < ctrl.people.length; i++){
        for(var j = 0; j < ctrl.namePicker.length; j++){
          for (var k = 0; k < ctrl.people[i].family.length; k++){
          while(ctrl.people[i].name === ctrl.namePicker[j].name && 
            ctrl.people[i].family[k] === ctrl.namePicker[j].name ){
                    ctrl.grabBagNames = ctrl.shuffleNames(ctrl.namePicker);
                    ctrl.loopPressed = true;
                    return ctrl.grabBagNames;
            }
          } 
        }
      }
    }
};
