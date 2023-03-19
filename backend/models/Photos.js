import mongoose, { Schema } from 'mongoose';

const photosSchema = new Schema(
  {
    image: String,
    title: String,
    likes: Array,
    comments: Array,
    userId: mongoose.ObjectId,
    userName: String,
  },

  {
    timestamps: true,
  },
);

const Photo = mongoose.model('Photo', photosSchema);

export default Photo;
