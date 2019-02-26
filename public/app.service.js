"use strict";

function CartService($http) {
    const self = this;
    self.getAllItems = function() {
        return $http ({
            method: "GET",
            url: "/cartItems"
        })
    }
}

angular
    .module("App")
    .service("CartService", CartService)