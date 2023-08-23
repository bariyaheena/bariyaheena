const express = require("express");
// const app = express();

const  student_Act = require("../controllar/student");
const router = express.Router();

router.get('/', student_Act.getStudents);
router.get('/:name', student_Act.getrollStudent);
router.post('/', student_Act.createstudent);


module.exports= router;