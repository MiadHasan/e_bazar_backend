import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongooose from "mongoose";
import productRoutes from "./routes/product.js";
import orderRoutes from "./routes/order.js";


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;

mongooose
  .connect(
    "mongodb+srv://miad:1704118@cluster0.rwbtr3l.mongodb.net/?retryWrites=true&w=majority",
  )
  .then(() =>
    app.listen(port, () => console.log(`Server is running on port ${port}`)),
  )
  .catch((e) => console.log(e));
