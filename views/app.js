const express = require("express");
const morgan = require("morgan");
const app = express();
var cookieParser = require("cookie-parser");
// const Blog = require("./models/blog");
// const blogRoutes = require("./routes/blogRoutes");
// const blogController = require("./controllers/blogController");
// require("dotenv").config();

app.set("view engine", "ejs");
app.listen(3000);
console.log("listening on port 3000 ");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("homepage", { title: "home" });
});

app.get("/signup", (req, res) => {
  res.render("signup", { title: "signup" });
});

app.get("/login", (req, res) => {
  res.render("login", { title: "login" });
});

app.get("/semester", (req, res) => {
  res.render("semester", { title: "semester" });
});

app.get("/semester/marks", (req, res) => {
  var subjects = req.cookies["subjects"];
  var sem = subjects[0];
  subjects = subjects.slice(1)[0];
  console.log(sem);
  console.log("Subjects :", subjects);
  // res.clearCookie("subjects", { httpOnly: true });
  res.render("marks", { title: "marks", subjects: subjects, sem: sem });
});

// ------------------------------------------------- semesters ----------------------------------------------------------
app.get("/semester/semc", (req, res) => {
  var subs = [
    "18MAT11/21",
    "18CHE12/22",
    "18CPS13/23",
    "18ELN14/24",
    "18ME15/25",
    "18CHEL16/26",
    "18CPL17/27",
    "18EGH18/28(ENGLISH)",
  ];
  console.log("called");
  res.cookie("subjects", ["1st and 2nd sem (chemistry group)", subs], {
    httpOnly: true,
  });
  res.redirect("/semester/marks");
});

app.get("/semester/semp", (req, res) => {
  var subs = [
    "18MAT11/21",
    "18PHY12/22",
    "18ELE13/23",
    "18CIV14/24",
    "18EGDL15/25",
    "18PHYL16/26",
    "18ELEL17/27",
    "18EGH18/28(ENGLISH)",
  ];
  res.cookie("subjects", ["1st and 2nd sem (physics group)", subs], {
    httpOnly: true,
  });
  res.redirect("/semester/marks");
});

app.get("/semester/sem3o4", (req, res) => {
  var subs = [
    "18MAT31/41",
    "18**32/42",
    "18**33/43",
    "18**34/44",
    "18**35/45",
    "18**36/46",
    "18**L37/47",
    "18**L38/48",
    "18CPC39/49 or Kannada",
  ];
  res.cookie("subjects", ["3rd and 4th Semester", subs], { httpOnly: true });
  res.redirect("/semester/marks");
});

app.get("/semester/sem5", (req, res) => {
  var subs = [
    "18**51",
    "18**52",
    "18**53",
    "18**54",
    "18**55",
    "18**56",
    "18**L57",
    "18**L58",
    "Environmental Studies",
  ];
  res.cookie("subjects", ["5th Semester", subs], { httpOnly: true });
  res.redirect("/semester/marks");
});

app.get("/semester/sem6", (req, res) => {
  var subs = [
    "18**61",
    "18**62",
    "18**63",
    "18**64*",
    "18**65*",
    "18**L66",
    "18**L67",
    "18**MP68",
  ];
  res.cookie("subjects", ["6th Semester", subs], { httpOnly: true });
  res.redirect("/semester/marks");
});

app.get("/semester/sem7", (req, res) => {
  var subs = [
    "18**71",
    "18**72",
    "18**73*",
    "18**74*",
    "18**75*",
    "18**L76",
    "18**P77",
  ];
  res.cookie("subjects", ["7th Semester", subs], { httpOnly: true });
  res.redirect("/semester/marks");
});

app.get("/semester/sem8", (req, res) => {
  var subs = ["18**81", "18**82*", "18**P83", "18**S84", "18**I85"];
  res.cookie("subjects", ["8th Semester", subs], { httpOnly: true });
  res.redirect("/semester/marks");
});

// -------------------------------------------------------------------------------------------------------

app.get("/cgpa", (req, res) => {
  res.render("cgpa", { title: "cgpa" });
});
