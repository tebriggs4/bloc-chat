(function() {
    function Message($firebaseArray, $cookies) {
        
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        var currRoomId = null;
        
        return {
            getByRoomId: function (roomId) {
                currRoomId = roomId;
                return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
            },
            
            send: function(newMessage) {
                if (currRoomId == null) {
                    alert('You must select a Chat Room first');
                } else {
                    messages.$add({
                        username: $cookies.get('blocChatCurrentUser'),
                        content: newMessage,
                        roomId: currRoomId
                    })
                }
            }
        }       
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();