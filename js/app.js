/**
 * @author wangzilong
 * @date 2019/11/30 15:57
 */
angular.module("resume",[])
    .constant('$ionicLoadingConfig',{
        template:'加载中！！！'
    })
    .run(($rootScope) =>  {
        console.log("带小老弟走吧~_~");
        console.log($rootScope);
    })
    .controller('headerCtrl',function ($scope) {
        $scope.name = "wangzilong";
    });