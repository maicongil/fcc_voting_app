import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const option = new Schema({
    title : {
        type : String,
        required : [true, 'Option title is required']
    }, 
    votes : {
        type : Number,
        default : 0
    }
});

const pollSchema = new Schema({
    title : {
        type : String, 
        required : [true, 'Poll title is required']},
    date: {
        type: Date,
        default: Date.now 
    },
    
    options : {type : [option], required : [true, 'At least one option is required']}
});


export default mongoose.model('Poll', pollSchema);
