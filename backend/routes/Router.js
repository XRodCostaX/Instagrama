import express from 'express';

const router = express();

// teste route
router.get('/', (req, res) => {
  res.send('API working!');
});

export default router;
