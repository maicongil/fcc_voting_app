import { Router } from 'express';
import * as PollController from '../controllers/poll.controller';

const router = new Router();

router.route('/polls').get(PollController.getPolls);

export default router;