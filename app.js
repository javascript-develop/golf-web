const express = require('express');
const app = express()
const cors = require('cors')
app.use(cors({
      origin: "https://michigansbestgolfdeals.com/"
}))
// const cookieParser = require('cookie-parser')
const fileUpload = require("express-fileupload");
// middelwar 
// app.use(cookieParser())
app.use(express.json())

app.use(fileUpload());
app.use(express.static("public"));

// all router
const userRouter = require("./router/user")
const courseRouter = require("./router/courses")
const orderRouter = require("./router/order");
const errorHandeler = require('./utilities/errorHendeler');
const contectHandeler = require("./router/contect")
app.use("/api/v1/user", userRouter)
app.use("/api/v1/courses", courseRouter)
app.use("/api/v1/order", orderRouter)
app.use("/api/v1/contect", contectHandeler)




// paypal payment get way intergation
app.post("/pay", (req, res) => {

      const { price } = req.query

      console.log(price);
      const create_payment_json = {
            intent: "sale",
            payer: {
                  payment_method: "paypal",
            },
            redirect_urls: {
                  return_url: "http://localhost:3000/myCart/chackout/review/payment/success",
                  cancel_url: "http://localhost:3000/cancel",
            },
            transactions: [
                  {
                        item_list: {
                              items: [
                                    // {
                                    //   name: "Red Sox Hat",
                                    //   sku: "001",
                                    //   price: "25.00",
                                    //   currency: "USD",
                                    //   quantity: 1,
                                    // },
                              ],
                        },
                        amount: {
                              currency: "USD",
                              total: price,
                        },
                        description: "Hat for the best team ever",
                  },
            ],
      };
      app.get("/success", (req, res) => {
            const payerId = req.query.PayerID;
            const paymentId = req.query.paymentId;

            const execute_payment_json = {
                  payer_id: payerId,
                  transactions: [
                        {
                              amount: {
                                    currency: "USD",
                                    total: price,
                              },
                        },
                  ],
            };

            paypal.payment.execute(
                  paymentId,
                  execute_payment_json,
                  function (error, payment) {
                        if (error) {
                              console.log(error.response);
                              throw error;
                        } else {
                              console.log(JSON.stringify(payment));
                              res.send("Success");
                        }
                  }
            );
      });
      paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                  throw error;
            } else {
                  for (let i = 0; i < payment.links.length; i++) {
                        if (payment.links[i].rel === "approval_url") {
                              res.redirect(payment.links[i].href);
                        }
                  }
            }
      });
});
app.get("/cancel", (req, res) => res.send("Cancelled"));

app.use('/' , (req , res)=>{
      res.send("hellw world")
})

app.use(errorHandeler)


module.exports = app


// gngg gng