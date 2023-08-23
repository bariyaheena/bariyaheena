const student = require("../model/student");


const getStudents = async (req, res) => {
  try {
    const student = await Student.find();
    return res.status(200).json(student);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const getrollStudent = async (req, res) => {
  const name = req.params.name;
  try {
    const stud = await Student.findOne({ name: name });
    return res.status(200).json(stud);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const createstudent = async (req, res) => {
  console.log(req.body);
  const newstudent = {
    name: req.body.name,
    roll: req.body.roll,
    registration: req.body.registration,
    subjects: req.body.subjects,
    registered_on: req.body.registered_on
  }
  try {

    const data = await student.create(newstudent);
    return res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  };
}

module.exports = {
  getStudents,
  getrollStudent,
  createstudent
}