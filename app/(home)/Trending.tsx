

import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    trendingPosts:void;
  };
const Trending = () => {
    return (
      <section className="pt-3 pb-10">
        <div className="flex items-center gap-3">
          <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">
            TRENDING
          </div>
          <p className="text-sm">
            Nunc enim lobortis quam risus et feugiat nibh eu ornare. Molestie sit
            nulla dolor diam turpis.
          </p>
        </div>
  
        {/* flex option */}
        {/* <div className="flex justify-between gap-3 my-3">
          <div className="basis-1/2 bg-wh-500 h-96"></div>
          <div className="flex flex-col basis-1/2 gap-3 h-96">
            <div className="basis-1/2 bg-wh-500"></div>
            <div className="flex basis-1/2 gap-3">
              <div className="basis-1/2 bg-wh-500"></div>
              <div className="basis-1/2 bg-wh-500"></div>
            </div>
          </div>
        </div> */}
  
        {/* grid option */}
        <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
         {/* <TrendingCard
            className="col-span-2 row-span-2 bg-wh-500"
            post={trendingPosts[0]}
          />
          <TrendingCard
            className="col-span-2 row-span-1 bg-wh-500"
            post={trendingPosts[1]}
          />
          <TrendingCard
            className="col-span-1 row-span-1 bg-wh-500"
            post={trendingPosts[2]}
          />
          <TrendingCard
            className="col-span-1 row-span-1 bg-wh-500"
            post={trendingPosts[3]}
    />*/}
        </div>
  
        <p className="text-sm">
          Id cursus purus adipiscing ipsum pretium. Scelerisque suspendisse
          pharetra ultrices mauris ut lacus sagittis pharetra dictum. Congue
          viverra in aliquam feugiat pellentesque.
        </p>
      </section>
    );
  };
  
  export default Trending;