'use strict';

eventApp.controller('MainCtrl', function ($scope) {
    $scope.items = [
        {"name": "Filter"},
        {"name": "To Do List"}]
    $scope.selectedIndex = 0;
    $scope.active = function($index) {
        $scope.selectedIndex = $index;

    }

});

eventApp.controller('datesCtrl', function ($scope) {
    $scope.cur = Date.now();
    $scope.dates = [
        {"date": "10/9/2012"},
        {"date": "10/9/2011"},
        {"date": "10/9/2013"},
        {"date": "10/9/2015"},
        {"date": "10/9/2014"},
        {"date": "12/9/2014"},
        {"date": "1/19/2014"}]

});

eventApp.controller('ToDoCtrl', function ($scope, $filter) {
$scope.list = { items: [{
    name : 'bread',
    done: false},{
    name : 'milk',
    done: true},{
    name : 'potato',
    done: false}]
}

    $scope.add = function(name){
        $scope.list.items.push({
            name : name,
            done: false
        })
    }

    $scope.$watch('itemscheked',function(){
        countchecked()
    })

    $scope.checked = function(done){
        if(done){
            $scope.complitedCount =-1;
            return true;
        }else{
            $scope.complitedCount =+1;
            return false;
        }
    }

    function countchecked(){
        $scope.complitedCount = $filter('filter')($scope.list.items, { done: true }).length;
    }

    $scope.delete = function(index){
        $scope.list.items.splice(index,1)
    }

    $scope.clearAll = function () {
        //$filter('filter')(todos, { completed: false }).length
        $scope.list.items = $filter('filter')($scope.list.items, { done: false });

//            list.items.$filter(function (val) {
//            return !val.done;
//        });
    }

});

