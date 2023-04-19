import { Request, Response } from "express";
import fs from "fs";
import Post from "../models/PostModel";

export const getImage = async (req: Request, res: Response) => {
  try {
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

export const deleteImage = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;

    if (!name) {
      return res.status(400).json("Image name is required!");
    }

    fs.stat(`./public/images/${name}`, function (err, stats) {
      console.log(stats); //here we got all information of file in stats variable

      if (err) {
        return console.error(err);
      }

      fs.unlink(`./public/images/${name}`, function (err) {
        if (err) return console.log(err);
        console.log("file deleted successfully");
      });
    });

    await Post.updateOne(
      { images: name },
      {
        $pull: { images: name },
      }
    );

    res.status(200).json("Image deleted succesfully!");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};
