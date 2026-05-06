import express from 'express';

const router = express.Router();

router.post('/register', (req, res) => {
  res.json({ message: 'Register endpoint - implement authentication' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'Login endpoint - implement authentication' });
});

router.get('/me', (req, res) => {
  res.json({ message: 'Get current user - implement authentication' });
});

export default router;
