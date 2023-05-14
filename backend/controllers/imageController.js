import express from 'express';
import path from 'path';
import fs from 'fs';
import mime from 'mime-types';

const router = express.Router();

export const getSingleImage = async (req, res) => {
  const imagePath = path.join('uploads', req.params.filename);
  const contentType = mime.lookup(imagePath);
  if (!contentType) {
    res.status(404).send('Image not found');
    return;
  }
  try {
    const image = await fs.promises.readFile(imagePath);
    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': image.length
    });
    res.end(image);
  } catch (error) {
    console.error(error);
    res.status(404).send('Image not found');
  }
};

export const getSingleImageAdmin = async (req, res) => {
  const imagePath = path.join('adminuploads',req.params.filename);
  const contentType = mime.lookup(imagePath);
  if (!contentType) {
    res.status(404).send('Image not found');
    return;
  }
  try {
    const image = await fs.promises.readFile(imagePath);
    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': image.length
    });
    res.end(image);
  } catch (error) {
    console.error(error);
    res.status(404).send('Image not found');
  }
};


export default router;