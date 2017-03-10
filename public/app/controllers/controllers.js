app.controller('HomeCtrl', function($rootScope, $location)
{
    $rootScope.activetab = $location.path();
});

app.controller('SobreCtrl', function($rootScope, $location,$scope,$http)
{
    $rootScope.activetab = $location.path();
    $http.get('/retornar')
        .success(function(retorno){
            $scope.lista = retorno;
        })
});

app.controller('ContatoCtrl', function($rootScope, $location)
{
    $rootScope.activetab = $location.path();
});

app.controller('UserCtrl', function($rootScope, $location,$scope,$http)
{
    $rootScope.activetab = $location.path();
    var usuario = $rootScope.activetab.replace('/sobre/','');
    var user = {
        url: usuario
    }
    $http.post('/retornarUm',user)
        .success(function(retorno){
            $scope.nome = retorno;
        })
});