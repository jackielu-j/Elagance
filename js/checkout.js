/**
 * Created by Jacky on 2016/11/23.
 */
// 注册一个控制器
myapp.controller("checkoutCtrl",function($scope,cartShop){
    // 首先获取购物车中已经添加的所有商品
    $scope.cart = cartShop.findAll();

    // 计算购物车中所有商品的总金额
    $scope.summary = function(){
        var total = 0;
        angular.forEach($scope.cart,function(item){
            total += item.number * parseInt(item.product.price);
        });
        return total;
    };

    // 删除指定的商品
    $scope.remove = function(item){
        cartShop.remove(item.product.name);
    };
});

