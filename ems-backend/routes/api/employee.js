import express from 'express'
import Employee from '../../models/Employee.js';
const router = express.Router();


// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
    Employee.find()
    .then((employee) => res.json(employee))
    .catch((err) => res.status(404).json({ nobooksfound: 'No employee found' }));
});

router.post('/', (req, res) => {
    Employee.create(req.body)
      .then((employee) => res.json({ msg: 'employee added successfully' }))
      .catch(() => res.status(400).json({ error: 'Unable to add this employee' }));
  });

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
    Employee.findById(req.params.id)
    .then((employee) => res.json(employee))
    .catch((err) => res.status(404).json({ nobookfound: 'No employee found' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
    Employee.findByIdAndUpdate(req.params.id, req.body)
    .then((employee) => res.json({ msg: 'Updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, req.body)
    .then((employee) => res.json({ mgs: 'employee entry deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such an employee' }));
});

export default router
