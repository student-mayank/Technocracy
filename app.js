const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
app.use(express.static("public"));
dotenv.config();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://" +
      process.env.USERID +
      ":" +
      process.env.DBPASS +
      "@cluster0.ql1k27p.mongodb.net/?retryWrites=true&w=majority"
  );

  console.log("connected to Database!!");
}

const studentSchema = new mongoose.Schema({
  name: String,
  roll: String,
  courses_enrolled: Array,
  total_attendance: Number,
});

const student = mongoose.model("Student", studentSchema);

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server in running on port 3000`);
  }
});

app.get("/", (req, res) => {
  console.log();
});
app.get("/get_students", (req, res) => {
  async function getStudent() {
    const students = await student.find({});

    res.send(students);
  }
  getStudent();
});

app.get("/enrolled", (req, res) => {
  async function enrolledStudent() {
    const enrolled = await student.find(
      {
        course_enrolled: { $not: { $size: 0 } },
      },
      "name -_id"
    );

    res.send(enrolled);
  }

  enrolledStudent();
});

app.get("/gg_group", (req, res) => {
  async function ggGroup() {
    const ggStudent = await student.find(
      { total_attendance: { $lte: 30 } },
      "name roll -_id"
    );

    res.send(ggStudent);
  }
  ggGroup();
});

app.get("/student/:roll", (req, res) => {
  const rollNo = req.params.roll;

  async function getStudent() {
    const stud = await student.find({ roll: rollNo });
    console.log(!stud.length);
    if (!stud.length) {
      res.send("NO such student found!!");
    } else {
      res.send(stud);
    }
  }
  getStudent();
});
app.get("/courses/:course", (req, res) => {
  const course = req.params.course;

  async function get_student() {
    const enStud = await student.find(
      { courses_enrolled: course },
      "roll -_id"
    );

    res.send(enStud);
  }

  get_student();
});
