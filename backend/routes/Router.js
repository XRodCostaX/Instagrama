import express from 'express';
import useRoutes from './UserRoutes.js';

const router = express.Router();

router.use('/api/users', useRoutes);
// teste route
router.get('/', (req, res) => {
  res.send('API working!');
});

export default router;
