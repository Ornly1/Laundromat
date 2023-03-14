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
      <div
        className="mx-5 grid max-w-sm grid-cols-1 md:grid-cols-2 md:mx-0 md:max-w-none 
        lg:grid-cols-4"
      >
        {machines.map((item, index) => {
          return <CardDetails key={item.id} item={item} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Display;
