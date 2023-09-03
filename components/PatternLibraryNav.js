import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const PatternLibraryNav = () => {
  const router = useRouter();
  const links = [
    'before-and-after-slider',
    'last-read-indicator',
    'article-diff',
    'interactive-graph-compound-interest',
    'summarise-widget',
    'digital-patina',
    'cite-pull-forward'
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100%',
      width: '200px',
      background: '#f4f4f4',
      padding: '20px'
    }}>
      <ul>
        {links.map(link => (
          <li key={link}>
            <Link
              href={`/a-pattern-library/${link}`}
              passHref
              style={{ color: router.pathname.endsWith(link) ? 'blue' : 'black' }}>

              <span>
                {link.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </span>

            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatternLibraryNav;

