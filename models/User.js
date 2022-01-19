const { Schema, model } = require('mongoose')

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  bio: {
    type: String
  },
  photo: {
    type: String
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'post'
  }],
  notes: [{
    type: Schema.Types.ObjectId,
    ref: 'note'
  }]
}, { timestamps: true })

User.plugin(require('passport-local-mongoose'))

module.exports = model('user', User)
