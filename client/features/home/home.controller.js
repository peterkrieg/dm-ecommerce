angular.module('app')
.controller('homeController', function($scope, productsService){

  $scope.message = 'hellow';



  var getProducts = function(){
    $scope.loading = true;
    productsService.getProducts()
    .then(function(response){
      $scope.loading = false;

      $scope.products = response.data;
    })
  }

  getProducts();





  var addProduct = function(newProduct){
    $scope.newProduct = {};
    productsService.addProduct(newProduct)
      .then(function(response){
        console.log(response.data);
        $scope.products.push(response.data);
        // $scope.$apply();
      })
  }

  $scope.addProduct = addProduct;


  $scope.removeProduct = function(id, index){
    console.log(index);
    $scope.products.splice(index, 1);
    // $

    productsService.removeProduct(id)
      .then(function(response){
        console.log('response is', response);

      });

  }









})