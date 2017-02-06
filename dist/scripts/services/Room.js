(function() {
 function Room($firebaseArray) {                            /* inject the $firebaseArray service provided by AngularFire */
     
     /* Use Firebase's child() method (called on an instance of its API object) to either query an existing set of data */
     /* or reference one you intend to populate with data in the future. Use the $firebaseArray service to ensure the data */
     /* is returned as an array: */
     
     var ref = firebase.database().ref().child("rooms");
     var rooms = $firebaseArray(ref);
     
     return {
         all: rooms
     };
 }

 angular
     .module('blocChat')
     .factory('Room', ['$firebaseArray', Room]);
})();