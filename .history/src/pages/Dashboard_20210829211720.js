import React from "react";
import { Link } from "react-router-dom";

import Header from "../partials/Header";
import DataResearch from "../partials/DataResearch";

export default function Dashboard() {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      {/*  Site header */}
      <Header />
      <DataResearch />
      <FeaturesHomeme />
    </div>
  );
}
