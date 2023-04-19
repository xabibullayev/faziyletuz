import multer from "multer";
import path from "path";
import { Request, Response, NextFunction } from "express";

// Storage for document file
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/images");
  },
  filename: (req, file, callback) => {
    const temp_file_arr = file.originalname.split(".");

    const temp_file_name = temp_file_arr[0];

    const temp_file_extension = temp_file_arr[1];

    callback(
      null,
      temp_file_name + "-" + Date.now() + "." + temp_file_extension
    );
  },
});

// Store for document file
const imageStore = multer({
  storage,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
});

const checkFileType = (file: Express.Multer.File, cb: Function) => {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  }
  cb("filetype");
};

// Upload document file
export const uploadImage = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const upload = imageStore.array("images");

  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      console.log(err)
      return res.status(400).json(err.message);
    } else if (err) {
      if (err === "filetype") {
        return res.status(400).json("Image files only!");
      }

      return res.sendStatus(500);
    }

    next();
  });
};
