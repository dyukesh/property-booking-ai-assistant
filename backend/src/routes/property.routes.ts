import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'List properties endpoint',
    filters: req.query,
  });
});

router.get('/:id', (req, res) => {
  res.json({
    message: 'Get property details',
    propertyId: req.params.id,
  });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create property - admin only' });
});

export default router;
