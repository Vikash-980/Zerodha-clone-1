require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const {OrdersModel} = require('./model/OrdersModel');
const {MONGO_URL} = process.env;
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 3002;

const app = express(); 

mongoose.connect(MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ FIXED CORS - सभी frontends allow
app.use(cors({
  origin: [
    'https://zerodha-clone-frontend-s33j.onrender.com',
    'https://zerodha-clone-dashboard-mpmt.onrender.com'
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/", authRoute);

app.get("/", (req, res) => {
  res.json({ message: "Zerodha Clone Backend Live! 🚀" });
});

app.get("/allHoldings",async(req,res)=>{
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
})

app.get("/allPositions",async(req,res)=>{
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
})

app.get("/allOrders",async(req,res)=>{
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
})

app.post("/newOrder",async(req,res)=>{
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price : req.body.price,
    mode : req.body.mode,
  });

  newOrder.save();
  res.send("Order Saved!");
})

app.listen(PORT, () => {
  console.log(`The app is listining at port : ${PORT}`);
});

