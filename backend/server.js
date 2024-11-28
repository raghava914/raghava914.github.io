const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/process', (req, res) => {
  const { userId, hardwareId } = req.body;
  console.log(`Received request with userId: ${userId} and hardwareId: ${hardwareId}`);
  // Process the request here
  res.json({ message: 'Request processed successfully' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));