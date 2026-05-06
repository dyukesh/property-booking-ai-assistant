import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'List user bookings' });
});

router.get('/:id', (req, res) => {
  res.json({
    message: 'Get booking details',
    bookingId: req.params.id,
  });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create new booking' });
});

router.put('/:id', (req, res) => {
  res.json({ message: 'Update booking' });
});

router.delete('/:id', (req, res) => {
  res.json({ message: 'Cancel booking' });
});

export default router;
