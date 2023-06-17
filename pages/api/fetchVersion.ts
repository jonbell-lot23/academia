// pages/api/fetchVersion.js

import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  let { filename } = req.query;

  // If no filename is specified, default to the most recent file
  if (!filename) {
    const files = fs.readdirSync(path.resolve('./versions'));
    files.sort();
    filename = path.basename(files[files.length - 1], '.md');
  }

  try {
    const content = fs.readFileSync(
      path.resolve(`./versions/${filename}.md`),
      'utf8'
    );
    res.status(200).json({ content });
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while reading the file.' });
  }
}
