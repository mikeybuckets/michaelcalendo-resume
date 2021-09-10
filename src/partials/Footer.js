import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Top area: Blocks */}
        <div className='grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200'>
          {/* 1st block */}
          <div className='sm:col-span-12 lg:col-span-3'>
            <div className='mb-2'>
              {/* Logo */}
              <Link to='/' className='inline-block' aria-label='Cruip'>
                <div className='icon-container'></div>
              </Link>
            </div>
          </div>

          {/* 2nd block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='text-gray-800 font-medium mb-2'>UX/UI Design</h6>
          </div>

          {/* 3rd block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='text-gray-800 font-medium mb-2'>
              React - Javascript
            </h6>
          </div>

          {/* 4th block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='text-gray-800 font-medium mb-2'>Serverless Apps</h6>
          </div>

          {/* 5th block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-3'>
            <h6 className='text-gray-800 font-medium mb-2'>Cloud Automation</h6>
          </div>
        </div>

        {/* Bottom area */}
        <div className='md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200'>
          {/* Social links */}

          <p className='text-md text-gray-600 mr-4'>
            I am looking for a good developer job.
          </p>

          <div className='text-md text-gray-600 mr-4'>
            Thanks in advance for your time.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
