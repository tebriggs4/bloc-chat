(function() {
    function UserModalCtrl($scope, $uibModalInstance, $cookies) {
        
        $scope.setUsername = function(newUsername) {
            if($scope.newUsername && $scope.newUsername !== ''){
                
                $cookies.blocChatCurrentUser = $scope.newUsername;
                $uibModalInstance.close();
                
            } else {
                alert("Enter a valid username");
            }
        };
        
    }
    
    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['$scope', '$uibModalInstance', '$cookies', UserModalCtrl]);
})();