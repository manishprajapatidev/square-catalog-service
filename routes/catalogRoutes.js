import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import {
  getCategories,
  getProducts,
  getCatalogGrouped,
} from '../services/catalogService.js';

const router = Router();

router.get('/categories', asyncHandler(async (_req, res) => {
  res.json(await getCategories());
}));

router.get('/products', asyncHandler(async (_req, res) => {
  res.json(await getProducts());
}));

router.get('/catalog', asyncHandler(async (_req, res) => {
  res.json(await getCatalogGrouped());
}));

export default router;
