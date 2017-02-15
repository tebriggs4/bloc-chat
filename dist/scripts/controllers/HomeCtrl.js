(function() {
    function HomeCtrl($scope, $uibModal, Room, Message) { /* object constructors are capitalized to distinguish them from other functions */
        this.chatRooms = Room.getRooms;
        $scope.currentRoom = {};
        this.messages = [];
        
        this.createRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                size: 'sm'
            })
        };
        
        this.setCurrentRoom = function(room) {
            $scope.currentRoom = room;
            this.messages = Message.getByRoomId(room.$id);
        }
        
        this.sendMessage = function(newMessage) {
            if (newMessage == null || newMessage == undefined || newMessage == "" || newMessage == " ") {
                alert('Message is undefined');
            } else {
                Message.send(newMessage);
                this.newMessage = null;
            }
        }
            
    }
 
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', '$uibModal', 'Room', 'Message', HomeCtrl]);
})();