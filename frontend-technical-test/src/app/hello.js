export const hello = {
  template: require('./hello.html'),
  controller($rootScope,$http) {
    this.hello = 'TD Frontend Technical Test';

    $http.get('/test01/data.json').then(function(response) {

    		//deferred.resolve(response);
    		//alert(response, 'res');
    		$rootScope.data = response.data;
    		//$scope.data =$scope.data1[0];
		},function (error){
   		//console.log(error, " can't get data.");
   		 //return deferred.promise;
	});
  }
};
