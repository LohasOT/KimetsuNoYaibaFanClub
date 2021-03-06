const { Schema, model } = require('mongoose')

const Post = new Schema({
  title: {
    type: String,
    required: true 
  },
  body: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  notes: [{
    type: Schema.Types.ObjectId,
    ref: 'note'
  }]
}, { timestamps: true })

module.exports = model('post', Post)
