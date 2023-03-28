const mongoose = require('mongoose')
const { Schema } = mongoose

const NoteSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const NoteModel = mongoose.model('Notes', NoteSchema)
module.exports = NoteModel
