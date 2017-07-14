(function() {
  angular.module('myApp.album').controller('UserDetailController', UserDetailController);

  UserDetailController.$inject = ['UserService', '_album'];

  function UserDetailController(UserService, _album) {

    var vm = this;

    vm.isUserDetailLoading = true;
    vm.isUserDetailNotFound = false;


    UserService.getUser(_album.userId).then(function(res){
      if(res.id > 0){
        vm.user = res;
        console.log(vm.user);
      }
      else{
        vm.isUserDetailNotFound = true;
      }
      vm.isUserDetailLoading = false;
    });
    }

})();
