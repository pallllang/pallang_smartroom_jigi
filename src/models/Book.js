import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  student: {type:Number, required: true},
  date:  { type: String, required: true, trim: true, maxlength: 8},
  time:  { type: String, required: true, trim: true},
  createdAt: {type: Date, required: true, default: Date.now},
})

const Book = mongoose.model("Book", bookSchema);

export default Book;