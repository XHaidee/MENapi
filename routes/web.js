import express from 'express';
const router=express.Router();
import StudentController from '../controller/studentController.js';

router.get('/',StudentController.getAllDoc)
router.post('/',StudentController.createDoc)
router.get('/:id',StudentController.getSigleDocById)
router.put('/:id',StudentController.updateSigleDocById)
router.delete('/:id',StudentController.deleteSigleDocById)

export default router;