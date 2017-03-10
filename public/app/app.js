var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{
    // remove o # da url
    $locationProvider.html5Mode(true);

    $routeProvider

        // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
        .when('/', {
            templateUrl : '/app/views/home.html',
            controller     : 'HomeCtrl'
        })

        // para a rota '/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
        .when('/sobre', {
            templateUrl : '/app/views/sobre.html',
            controller  : 'SobreCtrl'
        })

        // para a rota '/contato', carregaremos o template contato.html e o controller 'ContatoCtrl'
        .when('/erro', {
            templateUrl : '/app/views/erro.html',
            controller  : 'HomeCtrl'
        })

        .when('/contato', {
            templateUrl : '/app/views/contato.html',
            controller  : 'ContatoCtrl'
        })

        .when('/sobre/:nome', {
            templateUrl : '/app/views/usuario.html',
            controller  : 'UserCtrl'
        })

        // caso não seja nenhum desses, redirecione para a rota '/'
        .otherwise ({ redirectTo: '/erro' });
});
