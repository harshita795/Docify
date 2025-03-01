const express = require("express");
const { sequelize } = require("./models");
const cors = require("cors");
const app = express();
require("dotenv").config();
const folderRoutes = require("./routes/folderRoutes.js");

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

app.use("/folders", folderRoutes);

sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully."))
  .catch((error) => console.error("Unable to connect to database", error));

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
