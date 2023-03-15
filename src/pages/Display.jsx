import React, { useContext } from "react";

// import context
import { MachineContexts } from "../contexts/MachineContexts";

// import components
import CardDetails from "../components/CardDetails";

const Display = () => {
  const { machines } = useContext(MachineContexts);

  return (
    <div className="container mx-auto py-12">
      <div className="mb-3 mx-5 md:mx-0">
        <h1 className="text-3xl">Laundromat</h1>
      </div>
      {/* card detail */}
      <div
        className="mx-5 grid max-w-sm grid-cols-1 md:grid-cols-2 md:mx-0 md:max-w-none 
        lg:grid-cols-4 gap-2"
      >
        {machines.map((item, index) => {
          return <CardDetails key={item.id} item={item} index={index} />;
        })}
      </div>
      {/* comment */}
      <div className="flex items-center mt-8 mx-5 md:mx-0">
        <div className="border border-gray-500 w-[380px] h-[120px] p-2">
          <h1 className="text-xl font-bold pb-1"> Comment</h1>
          <p>- Press the add button 3 times to run the machine.</p>
          <p>- The .env file adds a line token.</p>
        </div>
      </div>
    </div>
  );
};

export default Display;
