import express from 'express';
import authRoute from './aythRoutes.js'
const router = express.Router();

router.use(`/auth`, authRoute); // auth/register

export default router;