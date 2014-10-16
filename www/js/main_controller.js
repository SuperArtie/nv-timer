(function(){
  'use strict';
  angular.module('nv-timer')
  .controller('MainCtrl', ['$scope', '$interval', '$timeout', function($scope, $interval, $timeout){
    $scope.title = 'Heavy D n da Boyz';
    $scope.sec     = 0;
    $scope.min     = 0;
    $scope.startTimer = function(num){
      $scope.unitSec = num*60;
      var go = $interval(function(){
        $scope.unitSec--;
        $scope.min = Math.floor($scope.unitSec/60);
        $scope.sec = $scope.unitSec-60*$scope.min;
      }, 1000);
      $timeout(function(){
        $interval.cancel(go);
        navigator.vibrate(5000);
        }, num*60000);
    };
  }]);
})();
