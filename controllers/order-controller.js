const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const Order = require("../models/Order");

// TODO
// METHOD: POST
// REQUEST: Order object
// RESPONSE: None
const placeOrder = async (req, res) => {};

// TODO
// METHOD: GET
// REQUEST: Order ID
// RESPONSE: Selected order by ID
const getOrderDetails = async (req, res, next) => {};

// TODO
// METHOD: PATCH
// REQUEST: Order adjustemnts
// RESPONSE: None
const editOrder = async (req, res, next) => {};

// TODO
// METHOD: DELETE
// REQUEST: Order ID
// RESPONSE: None
const deleteOrder = async (req, res, next) => {};

exports.placeOrder = placeOrder;
exports.getOrderDetails = getOrderDetails;
exports.editOrder = editOrder;
exports.deleteOrder = deleteOrder;
