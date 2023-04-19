import mongoose from "mongoose";
import { IImage } from "../interfaces/ImageInterface";

const imageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Image = mongoose.model<IImage>("Image", imageSchema);

export default Image;
