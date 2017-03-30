import Poll from '../models/poll';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';


//List  polls
export function getPolls(req, res){
        Poll.find({}, function(error, polls){
            if(error){
                res.json({ error: err });   
            }else{
                res.json(polls);   
            }
        })
    }

//Get a poll
export function getPoll(req, res){
        Poll.findById(req.params.poll_id, function(error, foundPoll){
            if(error){
                res.json({ error: err });
            }else{
                res.json(foundPoll);   
            }
        })
    }

////authentication required routes

//List polls for logged user

//Create a new poll
export function createPoll(req, res){
    var poll = new Poll({
        title : req.body.title,
        options : req.body.options
    });

    poll.save(function (err, createdPoll) {
        if (err) {
            res.json({ error: err });   
        } else {
            res.json(createdPoll);
        }
    });
}

//Update a poll
export function updatePoll(req, res){
    Poll.update({_id : req.params.poll_id}, req.body.poll, function(error){
        if(error){
            res.json({ error: err });
        }else{
            res.json({ message: 'Succesfully updated a poll.' });   
        }
    })
}

//Delete a poll
export function removePoll(req, res){
    Poll.remove({_id : req.params.poll_id}, function(error){
        if(error){
            res.json({ error: err });
        }else{
            res.json({ message: 'Successfuly removed a poll.' });   
        }
    });
}
    