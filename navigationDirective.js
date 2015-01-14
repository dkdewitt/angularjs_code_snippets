   angular.module('app')
  .directive('navigation', function(sideBarService,userLoginService, documentApiService) {
    return {
        replace:'true',
        restrict: 'E',
      templateUrl: '/static/templates/navigation.html',
          link: function ($scope, element, attrs) {

            $scope.collapseSidebar = function(){
                sideBarService.setCollapseSideBar();
            }
            $scope.$watch( function () {
              
              return userLoginService.isLoggedIn();
               
            },

            function(){
             
              $scope.isLoggedIn = userLoginService.isLoggedIn();
              $scope.userName = userLoginService.getUserName();
            });

            $scope.$watch(function () {
              alert(documentApiService.getNewFilesCount());
              return documentApiService.getNewFilesCount();
            },
            function () {
              $scope.newFiles = documentApiService.getNewFilesCount();
              console.log(documentApiService.getNewFilesCount());
            });

  }
}
});