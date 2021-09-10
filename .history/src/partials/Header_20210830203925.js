import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "../utils/Transition.js";
import Dropdown from "../utils/Dropdown";

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [top, setTop] = useState(true);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      console.log(mobileNav.current.contains(target));
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white blur shadow-lg"
      }`}
    >
      <div className='max-w-6xl mx-auto px-5 sm:px-6'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Site branding */}
          <div className='flex-shrink-0 mr-4'>
            {/* Logo */}
            <Link to='/' className='block' aria-label='Cruip'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='48'
                height='48'
                viewBox='0 0 48 48'
              >
                <title>man-glasses</title>
                <g>
                  <rect
                    x='18'
                    y='24'
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    fill='#EAC3A2'
                    width='12'
                    height='15'
                  ></rect>{" "}
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    fill='#F1D9C5'
                    d='M35,12v8c0,6.0650005-4.9349995,11-11,11s-11-4.9349995-11-11v-8 H35z'
                  ></path>{" "}
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    fill='#FFFFFF'
                    d='M46,44.0092545 c0-1.6619644-1.2289314-3.5469093-2.7504997-4.2125969L30,34c-1.6879997,1.25-3.7539997,2-6,2s-4.3120003-0.75-5.9820004-2 L4.753592,39.7966576C3.232825,40.4612465,2,42.3496704,2,44.0092545v2.9878159C2,47.550972,2.4498155,48,3.001672,48h41.9966583 C45.5515404,48,46,47.5621185,46,46.9970703V44.0092545z'
                  ></path>{" "}
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    fill='#87613E'
                    d='M13,11.9989014 c0-3.3131027,2.5352898-6.9043617,5.6539803-8.0181808l7.4057007-2.6448898 c0.5193291-0.1854706,1.1393986,0.0623283,1.3841782,0.551899L29,5c3.3137093,0,6,2.6930313,6,6v6c0-2.7614212-2.2385788-5-5-5H18 c-2.7614202,0-5,2.2385788-5,5V11.9989014z'
                  ></path>{" "}
                  <polygon
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    fill='#191919'
                    points='21,48 23,42 25,42 27,48 '
                  ></polygon>{" "}
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    fill='#191919'
                    d='M23,42h2l2.184679-2.1846504 c0.4303093-0.4303055,0.3797398-1.1419716-0.1070938-1.5071068l-2.4775753-1.8582268 c-0.3555603-0.266674-0.8444595-0.266674-1.2000198,0l-2.4775753,1.8582268 c-0.4868336,0.3651352-0.5374031,1.0768013-0.1070938,1.5071068L23,42z'
                  ></path>{" "}
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    fill='#444444'
                    d='M20,48l-1.9820004-14L4.753592,39.7966576 C3.232825,40.4612465,2,42.3496704,2,44.0092545v2.9878159C2,47.550972,2.4509254,48,2.9947712,48H20z'
                  ></path>{" "}
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    fill='#444444'
                    d='M28,48l1.9820004-14l13.2644062,5.7966576 C44.7671738,40.4612465,46,42.3496704,46,44.0092545v2.9878159C46,47.550972,45.5490761,48,45.0052299,48H28z'
                  ></path>{" "}
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    fill='#444444'
                    d='M36,17v1c0,2.7614231-2.238575,5-5,5h-1 c-2.4190006,0-4.4360008-1.7180004-4.8990002-4h-0.0009995C25,18.4120007,24.552,18,24,18s-1.0200005,0.4510002-1.1000004,1 h-0.0009995C22.4360008,21.2819996,20.4190006,23,18,23h-1c-2.7614241,0-5-2.2385769-5-5v-1c0-1.1045694,0.8954306-2,2-2h20 C35.1045685,15,36,15.8954306,36,17z'
                  ></path>
                </g>
              </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className='hidden md:flex md:flex-grow'>
            {/* Desktop menu links */}
            <ul className='flex flex-grow justify-end flex-wrap items-center'>
              <li>
                <Link to='/dashboardt-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out'>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to='/pricing'
                  className='text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out'
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out'
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to='/tutorials'
                  className='text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out'
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  to='/blog'
                  className='text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out'
                >
                  Blog
                </Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title='Resources'>
                {/* 2nd level: hover */}
                <li>
                  <Link
                    to='/documentation'
                    className='font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight'
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    to='/support'
                    className='font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight'
                  >
                    Support center
                  </Link>
                </li>
                <li>
                  <Link
                    to='/404'
                    className='font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight'
                  >
                    404
                  </Link>
                </li>
              </Dropdown>
            </ul>

            {/* Desktop sign in links */}
            <ul className='flex flex-grow justify-end flex-wrap items-center'>
              <li>
                <Link
                  to='/signin'
                  className='font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out'
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  to='/signup'
                  className='btn-sm text-gray-200 bg-gray-900 hover:bg-gray-700 ml-3'
                >
                  <span>Sign up</span>
                  <svg
                    className='w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z'
                      fillRule='nonzero'
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className='flex md:hidden'>
            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && "active"}`}
              aria-controls='mobile-nav'
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className='sr-only'>Menu</span>
              <svg
                className='w-6 h-6 fill-current text-gray-900'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect y='4' width='24' height='2' />
                <rect y='11' width='24' height='2' />
                <rect y='18' width='24' height='2' />
              </svg>
            </button>

            {/*Mobile navigation */}
            <div ref={mobileNav}>
              <Transition
                show={mobileNavOpen}
                tag='nav'
                id='mobile-nav'
                className='absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white'
                enter='transition ease-out duration-200 transform'
                enterStart='opacity-0 -translate-y-2'
                enterEnd='opacity-100 translate-y-0'
                leave='transition ease-out duration-200'
                leaveStart='opacity-100'
                leaveEnd='opacity-0'
              >
                <ul className='px-5 py-2'>
                  <li>
                    <Link
                      to='/pricing'
                      className='flex text-gray-600 hover:text-gray-900 py-2'
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/about'
                      className='flex text-gray-600 hover:text-gray-900 py-2'
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/tutorials'
                      className='flex text-gray-600 hover:text-gray-900 py-2'
                    >
                      Tutorials
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/blog'
                      className='flex text-gray-600 hover:text-gray-900 py-2'
                    >
                      Blog
                    </Link>
                  </li>
                  <li className='py-2 my-2 border-t border-b border-gray-200'>
                    <span className='flex text-gray-600 hover:text-gray-900 py-2'>
                      Resources
                    </span>
                    <ul className='pl-4'>
                      <li>
                        <Link
                          to='/documentation'
                          className='text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2'
                        >
                          Documentation
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/support'
                          className='text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2'
                        >
                          Support center
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/404'
                          className='text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2'
                        >
                          404
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      to='/signin'
                      className='flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center'
                    >
                      Sign in
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/signup'
                      className='btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 w-full my-2'
                    >
                      <span>Sign up</span>
                      <svg
                        className='w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z'
                          fill='#999'
                          fillRule='nonzero'
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
