const express = require("express");
const app = express();
const path = require("path");
const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");
const Blog = require("./models/blog");

const port = process.env.PORT || 5000;

const cookieParser = require("cookie-parser");
const {
  checkForAuthenticationForCookie,
} = require("./middleware/authentication");

require("dotenv").config();
require("./config/user").connect();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationForCookie("token"));
app.use(express.static(path.resolve("./public")));

app.get("/", async (req, res) => {
  const allblog = await Blog.find({});
  return res.render("home", {
    user: req.user, // fetch user from db
    blogs: allblog,
  });
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);
app.listen(port, () => console.log(`sever listening on  ${port}`));
