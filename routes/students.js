import express from 'express';
import {
  getAllStudents,
  getSingleStudent,
  createNewStudent,
  updateStudent,
  removeStudent
} from '../controllers/students.js';

const students = express.Router();

students.get('/', getAllStudents);
students.get('/:id', getSingleStudent);
students.post('/', createNewStudent);
students.put('/:id', updateStudent);
students.delete('/:id', removeStudent);

export default students;
