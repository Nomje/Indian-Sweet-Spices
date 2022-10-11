const Order = require('../../models/order');
const Item = require('../../models/item');


async function cart(req, res) {
  const cart = await Order.fetchCart(req.user._id);
  res.json(cart);
}

async function itemInCart(req, res) {
  const cart = await Order.fetchCart(req.user._id);
  await cart.itemInCart(req.params.id);
  res.json(cart);
}

async function itemQtyCart(req, res) {
  const cart = await Order.fetchCart(req.user._id);
  await cart.setItemQty(req.body.itemId, req.body.newQty);
  res.json(cart);
}


async function checkout(req, res) {
  const cart = await Order.fetchCart(req.user._id);
  cart.paid = true;
  await cart.save();
  res.json(cart);
}

async function getOrderHistory(req, res) {
  const orders = await Order
    .find({ user: req.user._id, paid: true })
    .sort('-updatedAt').exec();
  res.json(orders);
}

module.exports = {
    cart,
    itemInCart,
    itemQtyCart,
    checkout,
    getOrderHistory
  };