"use strict";
const express = require("express");
const items = express.Router();
const cartItems = [
    {
        id: 1,
        product: "apple",
        price: 2,
        quantity: 30,
    },
    {
        id: 2,
        product: "banana",
        price: 5,
        quantitiy: 10,
    },
    {
        id: 3,
        product: "grapes",
        price: 1,
        quantitiy: 5,
    }
]
items.get("/cartItems", function (req, res) {
    res.send(cartItems);
    console.log("GET request made teehee.");
})

items.put("/cartItems/:id", function (req, res) {
    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id == req.params.id) {
            cartItems.splice(i, 1, req.body);
            console.log(req.body);
            console.log(req.body.id);
            res.send(cartItems);
            console.log("put request made");
            break;
        }
    }
})

items.post("/cartItems", function (req, res) {
    cartItems.push(req.body);
    console.log("post method made");
    res.send(cartItems);
})

items.delete("/cartItems/:id", function(req, res) {
    for(let i=0; i < cartItems.length; i++) {
      if(cartItems[i].id == req.params.id) {
        cartItems.splice(i, 1);
        res.send(cartItems);
        break;
      }
    }
    console.log("Delete request made")
  });

module.exports = items;