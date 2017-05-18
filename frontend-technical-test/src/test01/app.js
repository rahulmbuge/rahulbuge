//import '$http';

export const test01 = {
    template: require('./app.html'),
    controller($scope,$http,$rootScope,$log) {
    	//var deferred = $q.defer();
    	$http({method: 'get', url:'/test01/data.json'}).then(function (response) {
    	//$http.get('/test01/data.json').then(function(response) {
    		$scope.datas = response.data;
		});
    }
};
