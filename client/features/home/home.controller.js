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

  var addProduct = function(newProduct){
    alert('add product instantiated');
    productsService.addProduct(newProduct)
      .then(function(response){
        console.log(response.data);
        $scope.products.push(response.data);
        // $scope.$apply();
      })
  }

  $scope.addProduct = addProduct;









})