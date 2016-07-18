(function(){
    "use strict";
    
    angular.module('avinash.enukeTest', [])
        .directive('myFriend',myFriend);
        
    function myFriend() {
        var directive = {
            restrict: 'E',
            scope: {
                albumId: '=',
                id: '=',
                title: '=',
                url: '=',
                thumbnailUrl: '='
            },
            transclude: false,
            templateUrl: 'app/components/photo/photo.html',
            link: linkFunc,
            controller: friendController,
            controllerAs: 'vm'
        }
        
        return directive;
        
        function linkFunc(scope, el, attr) {
            
        }
        
        function friendController($log) {
            var vm = this;
        }
    }
})();