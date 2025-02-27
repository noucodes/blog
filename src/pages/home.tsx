import { useState, useEffect } from "react";

const Home = () => {
  return (
    <div className="wrapper h-svh w-full flex justify-center font-display text-sm">
      <div className="pageLayout grid grid-cols-3 gap-20 w-[60%] pt-20">
        <div className="aside flex flex-col px-3">
          <img src="" alt="" />
          <h3 className="Name font-bold mb-3">Lorem Ipsum</h3>
          <p className="Description font-light mb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            vel maxime eius ipsum tempora nam adipisci facere, iure ratione quas
            doloribus quam dolor placeat tenetur obcaecati culpa molestiae fuga
            totam?
          </p>
          <div className="social-media flex gap-4 font-light text-gray-500 mb-7">
            <a href="">
              <p className="social hover:border-b-2 border-gray-300">Github</p>
            </a>
            <a href="">
              <p className="social hover:border-b-2 border-gray-300">Reddit</p>
            </a>
            <a href="">
              <p className="social hover:border-b-2 border-gray-300">Discord</p>
            </a>
            <a href="">
              <p className="social hover:border-b-2 border-gray-300">@</p>
            </a>
          </div>
          <div className="side-menu">
            <ul>
              <li className="social font-bold py-2 px-1 hover:border-l-2 border-gray-200">
                Articles
              </li>
              <li className="social font-bold py-2 px-1 hover:border-l-2 border-gray-200">
                Notes
              </li>
              <li className="social font-bold py-2 px-1 hover:border-l-2 border-gray-200">
                Contact Me
              </li>
            </ul>
          </div>
        </div>
        <div className="articles col-span-2">Articles</div>
      </div>
    </div>
  );
};

export default Home;
