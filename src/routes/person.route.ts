import { Router } from 'express';
import { createPerson, deletePerson, getPeople, getPersonById, updatePerson } from '../controllers/person.controller';

const router = Router();

// Create
router.post('/', createPerson);

// Read
router.get('/', getPeople);
router.get('/:id', getPersonById);

// Update
router.patch('/:id', updatePerson);

// Delete
router.delete('/:id', deletePerson);

export default router;
