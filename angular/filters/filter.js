'use strict';

eventApp.filter('checkDate', function ($filter) {
    return function(date){
        var tdate= new Date(date.replace(/-/g,"/"));
        return $filter('date')(tdate, "dd-MM-yyyy");
    }

});

eventApp.filter('checkCur', function ($filter, $log) {
    return function(dates){
        var filtered=[];
        var dnow = Date.now();
        dnow = ViewFormat(dnow)
        dnow = DateForamt(dnow)
        for(var i = 0; i < dates.length; i++){

            var date = DateForamt(dates[i].date);
            if(date> dnow){
                var message = "Future date :" + ViewFormat(date)
                $log.warn(message)
            }
            else{
                date = ViewFormat(date)
                filtered.push(date)
            }
        }
        function DateForamt(date){
            var tdate= new Date(date.replace(/-/g,"/"));
            return tdate;
        }

        function ViewFormat(date){
            var tdate= $filter('date')(date, "dd-MM-yyyy");
            return tdate;
        }
        return filtered;
    }

});