import React from "react";
import Landing from "./Landing";
import RecentActivity from "./RecentActivity";
import Category from "./Category";

function Home() {
  return (
    <div>
      <Landing />
      <RecentActivity />
      <Category />
    </div>
  );
}

export default Home;
