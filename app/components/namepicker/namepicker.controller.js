angular.module('grabBagApp')
       .controller('namePickerCtrl', namePickerCtrl);

       namePickerCtrl.$inject = ['$http', '$state'];

      function namePickerCtrl($http, $state) {

        var ctrl = this;

        ctrl.names = [
         { name: "Sydney",
           pic: "pics/syd.jpg"
          },
          {
            name: "Tamara",
            pic: "pics/tam.jpg"
          },
          {
            name: "Talisha",
            pic: "pics/talisha.jpg"
          },
          {
            name: "Bertha",
            pic: "pics/bert.jpg"
          },
          {
            name: "Devin",
            pic: "pics/devin.jpg"
          },
          {
            name: "Michelle",
            pic: "pics/michelle.jpg"
          },
          {
            name: "Linda",
            pic: "pics/linda.jpg"
          },
          {
            name: "Larry",
            pic: "pics/larry.jpg"
          },
          {
            name: "Terry",
            pic: "pics/terry.jpg"

          },
          {
            name: "Sean",
            pic: "pics/sean.jpg"
          }
        ];

        ctrl.namePicker = angular.copy(ctrl.names);
        ctrl.grabBagNames = [];
        ctrl.shuffleNames = shuffleNames;
        ctrl.loop = loop;
        ctrl.loopPressed = false;

        function shuffleNames (names){
          var namePicker = names.sort(function(){ return 0.5 - Math.random() });
          return namePicker;
        }

         function loop(){
          for(var i = 0; i < ctrl.names.length; i++){
          for(var j = 0; j < ctrl.namePicker.length; j++)
            while(ctrl.names[i].name === ctrl.namePicker[j].name){
              ctrl.grabBagNames = ctrl.shuffleNames(ctrl.namePicker);
              ctrl.loopPressed = true;
              return ctrl.grabBagNames;
            }
          }
        }
};
