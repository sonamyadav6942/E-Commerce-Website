const express = require("express");
const bodyparser = require("body-parser");
const stripe = require("stripe")(
  "sk_test_51MybSVSIJ66Hi8nb5OKggkpRUWmzXdr0rXhOUdp9oEJ1o8ARVkVqlfYLuQ9Y6hLFRVmi1N6SMD3VXritmzYHESMh00bsFJMdLX"
);
const uuid = require("uuid").v4;
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
const PORT = process.env.PORT || 5000;

app.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);
  let error, status;
  try {
    const { amount, token } = req.body;
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: amount * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      {
        key: key,
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.log(error);
    status = "failure";
  }
  res.json({ error, status });
});

app.listen(PORT, () => {
  console.log("App is listening on port 5000");
});
