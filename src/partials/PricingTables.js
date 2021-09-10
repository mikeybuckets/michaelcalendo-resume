import React, { useState } from "react";

function PricingTables() {
  const [value, setValue] = useState(true);

  const [priceOutput] = useState({
    plan1: {
      false: ["$", "0", "/month"],
      true: ["$", "0", "/month"],
    },
    plan2: {
      false: ["$", "34", "/month"],
      true: ["$", "24", "/month"],
    },
    plan3: {
      false: ["$", "59", "/month"],
      true: ["$", "49", "/month"],
    },
    plan4: {
      false: ["$", "109", "/month"],
      true: ["$", "99", "/month"],
    },
  });

  return (
    <section className='bg-gradient-to-b from-white to-gray-100'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='flex flex-grow mxy-auto'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12'>
            <div className='flex justify-center items-start'>
              <img
                className='rounded shadow-2xl autoFocus'
                src={require("../images/mikes-resume_090921.png").default}
                alt='About us'
              />
            </div>

            {/* Pricing tables */}
            <div>{/* Pricing toggle */}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingTables;
