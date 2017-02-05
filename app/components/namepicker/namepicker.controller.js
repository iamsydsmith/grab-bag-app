angular.module('grabBagApp')
       .controller('namePickerCtrl', namePickerCtrl);

       namePickerCtrl.$inject = ['$http', '$state'];

      function namePickerCtrl($http, $state) {

        console.log('namePickerCtrl is alive!');


        var ctrl = this;

        ctrl.names = [
         { name: "Sydney"
          },
          {
            name: "Tamara"
          },
          {
            name: "Talisha"
          },
          {
            name: "Bertha"
          },
          {
            name: "Devin"
          },
          {
            name: "Michelle"
          },
          {
            name: "Linda"
          },
          {
            name: "Larry"
          },
          {
            name: "Terry"
          },
          {
            name: "Jourdan"
          }
        ];

         ctrl.namePicker = angular.copy(ctrl.names);

         ctrl.grabBagNames = [];

        ctrl.shuffleNames = shuffleNames;
        ctrl.loop = loop;

        function shuffleNames (names){
          var namePicker = names.sort(function(){ return 0.5 - Math.random() });
          return namePicker;
        }

         function loop(){
          for(var i = 0; i < ctrl.names.length; i++){
          for(var j = 0; j < ctrl.namePicker.length; j++)
            while(ctrl.names[i].name === ctrl.namePicker[j].name){
              ctrl.grabBagNames = ctrl.shuffleNames(ctrl.namePicker);
              return ctrl.grabBagNames;
              console.log(names[i].name);
            }
          }
        }
};
