import React, { useContext, useEffect, useState } from "react";
import WashingIcon from "../assets/images/washing.png";

// import context
import { MachineContexts } from "../contexts/MachineContexts";

const DEFAULT_TIME_MACHINE = 62; // second
const DEFAULT_TIME_LINE_NOTIFY = 60;

const CardDetails = ({ item, index }) => {
  const [counter, setCounter] = useState(-1);

  const { id, machine, coin, status } = item;
  const { handleClickAddCoin, toggleStatus, handleNotifyMessage } =
    useContext(MachineContexts);

  useEffect(() => {
    if (status) {
      setCounter(DEFAULT_TIME_MACHINE);
    }
  }, [status]);

  useEffect(() => {
    let timer;

    if (status && counter > 0) {
      timer = setTimeout(() => {
        setCounter((count) => count - 1);
      }, 1000);
    } else if (status && counter === 0) {
      toggleStatus(index);
      setCounter(-1);
    }

    if (counter === DEFAULT_TIME_LINE_NOTIFY) {
      handleNotifyMessage(id);
    }

    if (!timer) {
      clearTimeout(timer);
    }
  }, [counter, status]);

  return (
    <div className="border border-[#e4e4e4] p-2 shadow-sm">
      <div className="flex border-b-[1px] py-2">
        <div className="flex w-full flex-row justify-between">
          <div className="flex flex-row">
            <img src={WashingIcon} width={26} />
            <h3 className="text-lg capitalize mx-2">{machine}</h3>
            <h3 className="text-lg uppercase">{`MACHINE ${id}`}</h3>
          </div>
          <div>
            <p>{coin}</p>
          </div>
        </div>
      </div>

      {/* detail */}
      <div className="flex justify-between gap-2 px-1 py-2">
        {/* time*/}
        <div>
          <p>{status ? "Waiting" : "Ready"}</p>
          <p>{status ? counter : "00:00"}</p>
        </div>
        {/* coin */}
        <button
          disabled={status}
          onClick={() => handleClickAddCoin(index)}
          className="flex w-20 items-center justify-center rounded-sm border-0
          bg-green-400 text-white hover:opacity-90 disabled:bg-slate-400 
          disabled:opacity-100"
        >
          <div className="font-semibold">Add</div>
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
