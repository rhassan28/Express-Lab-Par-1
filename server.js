"use strict";
const express = require("express");
const app = express();
const items = require("./route");
app.use(express.static("./public"))
app.use(express.json());
app.use("/", items);
app.listen(8080, () => {
    console.log("server is running.");
})