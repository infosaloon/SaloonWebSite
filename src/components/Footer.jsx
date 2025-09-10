import React from 'react';

function Footer() {
  return (
    <footer className="footer-fixed bg-gray-900 text-white py-3 text-center border-t border-gray-800 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-xs font-medium mb-0">
          Powered By{' '}
          <a
            href="https://www.botivate.in/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200 underline decoration-transparent hover:decoration-current"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://www.botivate.in/', '_blank', 'noopener,noreferrer');
            }}
          >
            Botivate
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;