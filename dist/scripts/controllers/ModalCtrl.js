(function() {
    function ModalCtrl($scope, $uibModalInstance, Room) {
        
        $scope.create = function(name) {
            Room.addRoom(name);
            $uibModalInstance.close();
        };
            
        $scope.cancel = function() {
            $uibModalInstance.dismiss();
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModalInstance', 'Room', ModalCtrl]);
})();