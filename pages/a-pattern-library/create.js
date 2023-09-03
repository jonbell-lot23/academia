const fs = require('fs');
const path = require('path');

const slugs = [
  'before-and-after-slider',
  'last-read-indicator',
  'article-diff',
  'interactive-graph-compound-interest',
  'summarise-widget',
  'digital-patina',
  'cite-pull-forward'
];

const pagesDir = '/Users/jon/cmd/academia/pages/a-pattern-library';

slugs.forEach((slug) => {
  const filePath = path.join(pagesDir, `${slug}.js`);
  const displayName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const content = `
import React from 'react';
import PatternLibraryNav from '../../components/PatternLibraryNav';

const ${displayName.replace(/\s+/g, '')} = () => {
  return (
    <div style={{ marginLeft: '220px' }}>
      <PatternLibraryNav />
      <h1>${displayName}</h1>
      <div id="${slug}-content">
        {/* Add your content here */}
      </div>
    </div>
  );
};

export default ${displayName.replace(/\s+/g, '')};
  `;

  fs.writeFileSync(filePath, content, 'utf8');
});

