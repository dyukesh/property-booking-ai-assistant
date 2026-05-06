import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  const { message } = req.body;
  res.json({
    message: 'Chat endpoint',
    userMessage: message,
    response: 'AI response will be generated here',
  });
});

router.post('/intent', (req, res) => {
  const { message } = req.body;
  res.json({
    message: 'Intent detection',
    userMessage: message,
    intent: 'GENERAL_INFORMATION',
    confidence: 0.85,
  });
});

export default router;
