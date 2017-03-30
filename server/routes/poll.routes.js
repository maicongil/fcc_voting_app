import { Router } from 'express';
import * as PollController from '../controllers/poll.controller';

const router = new Router();

router.route('/polls')

    // /api/polls 	POST 	Create a poll.
    .post(PollController.createPoll)

    // /api/polls 	GET 	Get all the polls.
    .get(PollController.getPolls)
;

router.route('/polls/:poll_id')

    // /api/polls/:poll_id 	GET 	Get a single poll.
    .get(PollController.getPoll)

    // /api/polls/:poll_id 	PUT 	Update a poll with new info.
    .put(PollController.updatePoll)

    // /api/polls/:poll_id 	DELETE 	Delete a poll. 
    .delete(PollController.deletePoll)
;

export default router;