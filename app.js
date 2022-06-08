require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const companiesRouter = require("./routes/companies");
const mediaRouter = require("./routes/media");
const ordersRouter = require("./routes/orders");
const refreshTokensRouter = require("./routes/refreshTokens");
const regionsRouter = require("./routes/regions");

const verifyToken = require("./middlewares/verifyToken");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/companies", verifyToken, companiesRouter);
app.use("/media", mediaRouter);
app.use("/orders", ordersRouter);
app.use("/refresh-tokens", refreshTokensRouter);
app.use("/regions", regionsRouter);

module.exports = app;
