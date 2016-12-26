/**
 * Created by Jacky on 2016/11/23.
 */
var myapp=angular.module("myapp",["ionic"]);

myapp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("tour",{url:"/tour",templateUrl:"templates/tour/tour.html"})
        .state("home",{url:"/home",templateUrl:"templates/home/home.html"})
        .state("favorites",{url:"/favorites",templateUrl:"templates/favorites/favorites.html"})
        .state("checkout",{url:"/checkout",templateUrl:"templates/checkout/checkout.html"})
        .state("hats",{url:"/hats",templateUrl:"templates/hats/hats.html"})
        .state("clocks",{url:"/clocks",templateUrl:"templates/clocks/clocks.html"})
        .state("shirts",{url:"/shirts",templateUrl:"templates/shirts/shirts.html"})
        .state("jackets",{url:"/jackets",templateUrl:"templates/jackets/jackets.html"})
        .state("bags",{url:"/bags",templateUrl:"templates/bags/bags.html"})
        .state("shoes",{url:"/shoes",templateUrl:"templates/shoes/shoes.html"})
        .state("glasses",{url:"/glasses",templateUrl:"templates/glasses/glasses.html"})
        .state("jeans",{url:"/jeans",templateUrl:"templates/jeans/jeans.html"})
        .state("discovery",{url:"/discovery",templateUrl:"templates/discovery/discovery.html"})
        .state("detail",{url:"/detail",templateUrl:"templates/detail/detail.html"})
        .state("cart",{url:"/cart",templateUrl:"templates/cart/cart.html",controller:"checkoutCtrl"});
    $urlRouterProvider.otherwise("/tour");
});
