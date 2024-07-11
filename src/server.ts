// Initial configs
import express, { Request, Response } from 'express';
import personRoutes from './routes/person.route';
import loginRoutes from './routes/login.route';

// Initializer
const app = express();

// Reading JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
app.use('/person', personRoutes);
app.use('/auth', loginRoutes);

// Entry point / Endpoint
app.get('/', (_req: Request, res: Response) => {
  // Display a request
  res.json({ message: 'Hello, Express!' });
});

// Exposing a port
const port = process.env.PORT;
app.listen(port, () => console.log('Listening on port' + port));
