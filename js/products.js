/**
 * Created by Jacky on 2016/11/23.
 */
// 注册一个控制器
myapp.controller("productsCtrl",function($scope,$http,$state,cartShop) {
    $scope.data={};

    $scope.details=[];

    // 存储请求回来的数据
    $http.get("product.json").success(function (data) {
        $scope.data=data;
    });

    // 传入一个整数n，返回一个长度为n的数组
    $scope.getNumber = function (number) {
        return new Array(number);
    };
    
    $scope.toDetail= function (cata, img, name, price) {
        $scope.details.cata=cata;
        $scope.details.imgsrc=img;
        $scope.details.name=name;
        $scope.details.price=price;
        $state.go("detail");
    };

    var extendDeep = function(dst) {
        angular.forEach(arguments, function(obj) {
            if (obj !== dst) {
                angular.forEach(obj, function(value, key) {
                    if(angular.isObject(dst[key]) || angular.isArray(dst[key])){
                        extendDeep(dst[key], value);
                    } else {
                        dst[key] = angular.copy(value);
                    }
                });
            }
        });
        return dst;
    };

    // 加入购物车
    $scope.add = function(product){
        $scope.pro=extendDeep(product);
        console.log($scope.pro);

        // 调用购物车对象的add方法
        cartShop.add($scope.pro);
    };

    // 清空购物车
    $scope.clearCart = function(product){
        // 调用购物车对象的add方法
        cartShop.clear();
    };
});