(
  function()
  {
    var app = angular.module('chickens', []);

    app.controller('ChickenController', ['$http', function($http)
    {


    }]);

    function getAllChickens()
    {
      $http.get('/data/chickens.php').success(function(data)
      {
        return data;
      });
    }
  }
)();
