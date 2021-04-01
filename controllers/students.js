import Student from '../models/Student.js';

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSingleStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (!student) return res.status(404).json({ message: `Student with id of ${id} not found` });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNewStudent = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const newStudent = await Student.create({
      first_name,
      last_name,
      email,
      password
    });
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateStudent = async (req, res) => {};
export const removeStudent = async (req, res) => {};

export const sanitizeTest = async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await Student.find({ email, password });
    student.length > 0 ? res.send('Logged in') : res.sendStatus(401);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
