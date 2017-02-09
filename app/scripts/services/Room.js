(function() {
 function Room($firebaseArray) {                            /* inject the $firebaseArray service provided by AngularFire */
     
     /* Use Firebase's child() method (called on an instance of its API object) to either query an existing set of data */
     /* or reference one you intend to populate with data in the future. Use the $firebaseArray service to ensure the data */
     /* is returned as an array: */
     
     var ref = firebase.database().ref().child("rooms");
     var roomRef = $firebaseArray(ref);
     
     var rooms = {
         getRooms: getRooms,
         addRoom: addRoom
     };
     
     function getRooms() {
         return {
             all: roomRef
         }
     }
         
     function addRoom(name) {
         return roomRef.$add({
             name: name
         })
     }
     
     return rooms;
         
 }

 angular
     .module('blocChat')
     .factory('Room', ['$firebaseArray', Room]);
})();