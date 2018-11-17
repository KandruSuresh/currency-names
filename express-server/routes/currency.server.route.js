import express from 'express';
import * as currencyController from '../controllers/currency.server.controller';

const router = express.Router();

router.route('/')
     .get(currencyController.getCurrencies)
     .post(currencyController.addCurrency)
     .put(currencyController.updateCurrency);

router.route('/:id')
      .delete(currencyController.deleteCurrency);

export default router;
