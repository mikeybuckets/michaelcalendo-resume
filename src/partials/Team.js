import React from "react";

function Team() {
  return (
    <section className='bg-gradient-to-b from-gray-100 to-white border-t border-gray-200'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
            <h2 className='h2'>From a great family...</h2>
          </div>

          {/* Team members */}
          <div
            className='max-w-sm sm:max-w-5xl mx-auto sm:flex sm:flex-wrap sm:justify-center -my-6 sm:-my-8 sm:-mx-3'
            data-aos-id-team
          >
            {/* 1st member */}
            <div
              className='items-center sm:w-2 md:w-1/3 py-6 sm:py-8 sm:px-3'
              data-aos='zoom-y-out'
              data-aos-anchor='[data-aos-id-team]'
            >
              <div className='flex flex-col items-center'>
                <img
                  className='rounded-full mb-4'
                  src={require("../images/team-member-01.jpg").default}
                  width='120'
                  height='120'
                  alt='Team member 01'
                />
                <h4 className='text-xl font-bold mb-1'>Mark Lamprecht</h4>
                <div className='text-blue-600 font-medium mb-2'>
                  CEO & Co-founder
                </div>
                <p className='text-gray-600 text-center mb-3'>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat.
                </p>
                <div className='text-sm text-gray-600 font-medium'>
                  <a className='text-gray-900 hover:underline' href='#0'>
                    Twitter
                  </a>{" "}
                  ·{" "}
                  <a className='text-gray-900 hover:underline' href='#0'>
                    GitHub
                  </a>{" "}
                  ·{" "}
                  <a className='text-gray-900 hover:underline' href='#0'>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
