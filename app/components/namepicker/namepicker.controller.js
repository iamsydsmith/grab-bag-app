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

        // ctrl.people = [
        //  { name: "Sydney",
        //    pic: "pics/syd.jpg"
        //   },
        //   {
        //     name: "Tamara",
        //     pic: "pics/tam.jpg"
        //   },
        //   {
        //     name: "Talisha",
        //     pic: "pics/talisha.jpg"
        //   },
        //   {
        //     name: "Bertha",
        //     pic: "pics/bert.jpg"
        //   },
        //   {
        //     name: "Devin",
        //     pic: "pics/devin.jpg"
        //   },
        //   {
        //     name: "Michelle",
        //     pic: "pics/michelle.jpg"
        //   },
        //   {
        //     name: "Linda",
        //     pic: "pics/linda.jpg"
        //   },
        //   {
        //     name: "Larry",
        //     pic: "pics/larry.jpg"
        //   },
        //   {
        //     name: "Terry",
        //     pic: "pics/terry.jpg"

        //   },
        //   {
        //     name: "Sean",
        //     pic: "pics/sean.jpg"
        //   }
        // ];

        ctrl.namePicker = angular.copy(ctrl.people);
        ctrl.grabBagNames = [];
        ctrl.shuffleNames = shuffleNames;
        ctrl.loop = loop;
        ctrl.loopPressed = false;

        function shuffleNames (people){
          var namePicker = people.sort(function(){ return 0.5 - Math.random() });
          return namePicker;
        }

         function loop(){
          for(var i = 0; i < ctrl.people.length; i++){
          for(var j = 0; j < ctrl.namePicker.length; j++)
            while(ctrl.people[i].name === ctrl.namePicker[j].name){
              ctrl.grabBagNames = ctrl.shuffleNames(ctrl.namePicker);
              ctrl.loopPressed = true;
              return ctrl.grabBagNames;
            }
          }
        }
};
