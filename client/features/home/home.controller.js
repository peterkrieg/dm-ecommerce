angular.module('app')
.controller('homeController', function($scope, productsService){

  $scope.message = 'hellow';



  var getProducts = function(){
    productsService.getProducts()
    .then(function(response){
      console.log(response.data);

      $scope.products = response.data;

      console.log($scope.products);

    })
  }

  getProducts();

  







})