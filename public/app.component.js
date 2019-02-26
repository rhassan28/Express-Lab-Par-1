"use strict";
const cartItems = {
    template: `


    <form class="form"> 

        <p>Cart Items Listed</p>
        <input type="text" placeholder="product" id="input">
        <input type="text" placeholder="quantity" id="input">
        <input type="text" placeholder="price" id="input">
        <button>Add Item</button>
        <button>Delete Item</button>
    
    </form>


   
    `,
    controller: ["CartService", function(CartService) {
        const vm = this;
        CartService.getAllItems().then(response => {
            // console.log(repsonse);
            vm.cartItems = response.data;
        });

    }]
}

angular
    .module("App")
    .component("cartItems", cartItems)