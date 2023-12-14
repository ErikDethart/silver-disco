import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express TypeScript!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
