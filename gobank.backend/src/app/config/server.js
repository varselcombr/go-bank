import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.options('*', cors());

app.get('/', (req, res) => res.status(200).json({
  status: 'Alive',
  visits: 0,
}));

export default app;
