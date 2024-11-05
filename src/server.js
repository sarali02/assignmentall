import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Assignment Help API is running' });
});

// Assignments route
app.post('/api/assignments', (req, res) => {
  res.json({ message: 'Assignment request received' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});