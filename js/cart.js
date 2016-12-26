/**
 * Created by Jacky on 2016/11/23.
 */
// 注册一个控制器
myapp.controller("cartCtrl",function($scope,cartShop){
    // 首先拿到购物车中的所有商品
    var cartDate = cartShop.findAll();

    // 计算所有商品的总数量
    $scope.totalNumber = function(){
        var total = 0;
        angular.forEach(cartDate,function(item){
            total += item.number;
        });
        return total;
    };

    // 计算所有商品的总金额
    $scope.totalMoney = function(){
        var total = 0;
        angular.forEach(cartDate,function(item){
            total += item.number * item.product.price;
        });
        return total;
    };
});

