// Retrieve
motas = [
            {"mota_id":1,"aula":"1","estado":1,"temp":23,"hume":80,"consumo":120,"hora":"12:45"},
            {"mota_id":2,"aula":"2","estado":1,"temp":13,"hume":77,"consumo":110,"hora":"12:55"},
            {"mota_id":3,"aula":"3","estado":1,"temp":28,"hume":79,"consumo":100,"hora":"12:35"},
            {"mota_id":4,"aula":"4","estado":1,"temp":20,"hume":81,"consumo":130,"hora":"12:25"},
            {"mota_id":5,"aula":"5","estado":0,"temp":21,"hume":68,"consumo":150,"hora":"11:45"}
];

var app = angular.module("elektra", []);
app.controller("motas_ctrl", function($scope) {
  $scope.motas = motas;

app.directive("myInclude", function() {
return {
    restrict: "E",
    templateUrl: "/views/caja_aula.html"
    }
    })
});

