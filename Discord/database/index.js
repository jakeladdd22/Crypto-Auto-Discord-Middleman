const {Schema} = require('mongoose');
const mongoose = require('mongoose');

const mmIdentify = new mongoose.Schema({
    crypto: { type: String, required: true },
    identifier: { type: String, required: true },
    address: { type: String, required: true, default: "0" },
    status: { type: String, required: true, default: "0" },
    channelId: {type: String, required: true, default: "0"},
    sender: { type: String, required: true, default: "0"},
    receiver: { type: String, required: true, default: "0"},
    creatorUserId: {type: String, required: true, default: "0"},
    otherUserId: {type: String, required: true, default: "0"},
    amountInUsd: { type: Number, required: true, default: "0"},
    amountInCrypto: {type: Number, required: true, default: "0"},
    createdAt: { type: Date, required: true }
})

const ticketSchema = new mongoose.Schema({
    category: {
      type: String,
      required: true,
      enum: ['btc', 'ltc', 'eth', 'doge', 'usdt'],
    },
    ticketCount: {
      type: Number,
      default: 0,
    },
  });

const confirmationOne = new mongoose.Schema({
  channelId: {
    type: String,
    required: true,
    default: "0",
  },
  sender: {
    type: String,
    required: true,
    default: "0",
  },
  receiver: {
    type: String,
    required: true,
    default: "0",
  },
});

const mmPayment = new mongoose.Schema({
  crypto: { type: String, required: true },
  address: { type: String, required: true },
  orderId: { type: String, required: true },
  trackId: { type: String, required: true },
  channelId: {type: String, required: true },
  sender: { type: String, required: true },
})
  
const PaymentMM = mongoose.model('mmPayment', mmPayment)
const ConfirmationOne = mongoose.model('confirmationOne', confirmationOne);
const Ticket = mongoose.model('ticketCount', ticketSchema);
const IdentifyMM = mongoose.model('escrowTicket', mmIdentify)

module.exports = {
    PaymentMM,
    ConfirmationOne,
    IdentifyMM,
    Ticket,
};