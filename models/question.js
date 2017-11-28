const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

var schema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  organizeName: {type: String, trim:true},
  organizeExp: {type:String, trim: true},
  title: {type: String, trim: true},
  content: {type: String, trim: true},
  pay:{type:Boolean , default:0},
  ticket:{type:Number, default:0},
  maxPeople:{type:Number, default:100},
  numParticipate:{type:Number, default:0},
  participateName:{type:Array},
 // img:{type:String},
  startedAt: {type: String},
  finishedAt: {type: String},
  eventSort:{type:String , default:" - "},
  eventTopic:{type:String , default:" - "},
  lat:{type:String},
  lng:{type:String},
  //설문

  tags: [String],
  numLikes: {type: Number, default: 0},
  numAnswers: {type: Number, default: 0},
  numReviews: {type: Number, default: 0},
  numReads: {type: Number, default: 0},
  createdAt: {type: Date, default: Date.now}
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});
schema.plugin(mongoosePaginate);
var Question = mongoose.model('Question', schema);

module.exports = Question;
