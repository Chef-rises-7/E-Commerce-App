/* eslint-disable */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HPvU9DFg5koCdLGeOEiFvwHat4v8eMjX6SY0YCwxPBQBUPhKy1fPVhiSM5cQtgW7QBG9ydQcXnW57TDxVE2f3H000HSfmEQZF');


const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/",(req,res) => {
    res.status(200).send("heloo frands");
});


app.post("/payments/create",async(req,res) => {
    const total = req.query.total;
    console.log("booya!!!",total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr"
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
});

exports.api = functions.https.onRequest(app);
// sk_test_51IJIkZKGErwzweTltxZNAxV9Y2nMBn2MMksX080FnD0bWCbsCdUqJt0iEy2WVzchS2CH6NoY9GOVnl43OkAlIEAC00BOam6hQs