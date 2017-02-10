(function() {
    function HomeCtrl($scope, $uibModal, Room) {   /* object constructors are capitalized to distinguish them from other functions */
        this.chatRooms = Room.getRooms;
        
        this.createRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                size: 'sm'
            })
        };
        
    }
 
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', '$uibModal', 'Room', HomeCtrl]);
})();