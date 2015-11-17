var app = angular.module('app');


app.service('productsService', ['$q', '$http', productsService]);


function productsService($q, $http) {

  this.getProducts = function(){
    return $http.get('/api/products')
      .then(function(response){
        return response;
      })
  }














}
