/* eslint-disable import/extensions */
import express from 'express';

import { register } from '../controllers/UserController.js';

const router = express.Router();

// Routes
router.post('/register', register);

export default router;
