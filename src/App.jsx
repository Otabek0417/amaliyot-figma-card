import React from "react";
import "./App.css";
function App() {
  return (
    <div className="App w-full max-w-[635px] mx-auto md:grid md:grid-cols-2 ">
      <div className="text-start text-white rounded-t-lg bg-white shadow shadow-regal-blue p-[24px] md:p-[40px] col-start-1	col-end-3">
        <h1 className="text-xl md:text-2xl font-bold tracking-[-0.3px] text-[#2AB3B1] mb-6 ">
          Join our community
        </h1>
        <h2 className=" font-bold text-[15px] md:text-lg text-[#C0DF33] mb-[16px] md:mb-[11px]">
          30-day, hassle-free money back guarantee
        </h2>
        <p className=" text-[14px] md:text-base font-normal  text-[#9AA7BE] tracking-[-0.2px]">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>
      <div className="bg-[#2AB3B1]  shadow shadow-regal-blue p-[24px] md:p-[40px] text-start">
        <h3 className=" text-lg font-bold  text-white tracking-[-0.225px]">
          Monthly Subscription
        </h3>
        <div className="flex items-center gap-[11px] mb-1">
          <span className="text-[32px] font-bold text-white">$29</span>
          <span className="text-base font-normal  text-white opacity-[0.5]">
            per month
          </span>
        </div>
        <h4 className="mb-[26px] text-[16px] font-normal  text-white">
          Full access for less than $1 a day
        </h4>
        <div className="bg-[#C0DF33] w-full md:max-w-[237px] text-center rounded-[5px]">
          <button className="text-[16px] text-white py-[15px] font-bold  ">
            Sign Up
          </button>
        </div>
      </div>
      <div className=" shadow shadow-regal-blue p-[24px] md:p-[40px] text-start bg-[#88dfde] rounded-b-lg">
        <h5 className="text-lg text-white font-bold mb-[18px]">Why Us</h5>
        <p className="text-[14px] font-normal text-white">
          Tutorials by industry experts Peer & expert code review Coding
          exercises Access to our GitHub repos Community forum Flashcard decks
          New videos every week
        </p>
      </div>
    </div>
  );
}

export default App;
