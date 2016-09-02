(function() {
  "use strict";
  angular.module("app").controller("peopleCtrl",function($scope) {
    $scope.people = [
    {
      name: "Marisha",
      bio: "sdhfjdhsfkjfhd fdjdkfhs kjsdhfk sfhjdkdf shdgfj dfhs dfs",
      bioVisible: false
    },
    {
      name: "Bhanu",
      bio: "sdkhgkjdhgkjdfhgjk djfdgh ohktjt dkfjhg kdfhg dkfjh gjkdf bdfh dfg",
      bioVisible: false
    },
    {
      name: "Shiran",
      bio: "iortuyio iurey we hjsdg fjhsg hjdjkf khjdfk jgk dfhg kjdhfg kjdfhg",
      bioVisible: false
    }];

    $scope.addData = function(newName,newBio) {
      var newData = {
        name: newName,
        bio: newBio,
        bioVisible: false
      }
      $scope.people.push(newData);
    };

    $scope.showDetail = function(p) {
      var person = p;
      console.log(person);
      person.innerHTML = person.bio
    };

    $scope.changeVisible = function(p) {
      p.bioVisible = !p.bioVisible  
    }

    $scope.deletePerson = function(index) {
      $scope.people.splice(index, 1);
    }

    window.$scope = $scope;
  });
})();