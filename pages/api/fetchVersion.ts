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
    const filePath = path.resolve(`./versions/${filename}.md`);
    const content = fs.readFileSync(filePath, 'utf8');

    // Calculate word count
    const wordCount = content.split(/\s+/).filter(Boolean).length;

    // Get file creation date from filename
    const creationDate = filename.split('-').slice(1).join(' ');

    res.status(200).json({ content, wordCount, creationDate });
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while reading the file.' });
  }
}
