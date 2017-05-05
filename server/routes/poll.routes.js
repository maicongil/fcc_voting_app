import { Router } from 'express';
import * as PollController from '../controllers/poll.controller';

const router = new Router();

router.route('/polls').get(PollController.getPolls);
router.route('/polls').post(PollController.createPoll);

export default router;