var app = angular.module('app');


app.service('productsService', ['$q', '$http', productsService]);


function productsService($q, $http) {

  this.getProducts = function(){
    return $http.get('/api/products')
      .then(function(response){
        return response;
      });
  };

  this.addProduct = function(newProduct){
    return $http.post('/api/products', newProduct)
      .then(function(response){
        return response;
      });
  };

  this.removeProduct = function(id){
    return $http.delete('/api/products?id='+id)
      .then(function(response){
        return response;
      });
  };














}
