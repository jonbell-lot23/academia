import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  let { filename, format } = req.query;

  // Default format to 'narrative' if not specified
  if (!format || (format !== 'narrative' && format !== 'researchpaper')) {
    format = 'researchpaper';
  }

  // If no filename is specified, default to the most recent file
  if (!filename) {
    const directoryPath = path.resolve(`./versions/${format}`);
    const files = fs.readdirSync(directoryPath);
    files.sort();
    filename = path.basename(files[files.length - 1], '.md');
  }

  try {
    const filePath = path.resolve(`./versions/${format}/${filename}.md`);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Calculate word count
    const wordCount = content.split(/\s+/).filter(Boolean).length;

    // Get file creation date from filename
    const creationDate = filename.split('-').slice(1, 4).join(' ');

    res.status(200).json({ content, wordCount, creationDate });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while reading the file.' });
  }
}
