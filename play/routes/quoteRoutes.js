import express from 'express';
import { getRandomQuote, getAllQuotes } from '../controllers/quoteController.js';

const router = express.Router();

router.get('/random', getRandomQuote);
router.get('/', getAllQuotes);

export default router;
