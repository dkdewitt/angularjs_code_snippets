
app.directive('clickAway', function($compile, $document, $location, $timeout) {
    return {
        replace: true,
        scope: true,
        transclude: true,

        template: '<input type="text"  class="form-control"  ng-model="folder.name" placeholder="Enter name" focus-me="true" >',
        restrict: 'AE',
        link: function(scope, elem, attr, ctrl) {
            elem.on('click', function(e) {
                e.stopPropagation();
            });
            elem.on('keydown', function(e) {
                e.stopPropagation();
            });
            angular.element(document.querySelector('.newFolder')).on('click', function(e) {
                e.stopPropagation();
                return;
            })
            $document.on('click', function(e) {
                if (scope.folder != undefined && scope.showNewName == true) {

                    scope.createFolder(scope.folder);
                    scope.$apply(scope.setNewFlag());
                    elem.remove();
                    $document.off('click');
                    scope.$apply(scope.setMessage(''));
                    scope.folder = null;
                    return;
                };
                if (scope.folder == undefined) {
                    scope.$apply(scope.setMessage('Folder name cannot be blank'));
                    elem.remove();
                    $document.off('click');
                    scope.$apply(scope.setNewFlag());
                    $timeout(function() {
                        scope.$apply(scope.setMessage(''));
                    }, 2000)
                    return;
                };
            })
        }
    }
});