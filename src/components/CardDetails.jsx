import React, { useContext, useEffect, useState } from "react";
import WashingIcon from "../assets/images/washing.png";

// import context
import { MachineContexts } from "../contexts/MachineContexts";

const DEFAULT_TIME_MACHINE = 3600; // default time machine
const DEFAULT_TIME_LINE_NOTIFY = 60; // default time line notify

const CardDetails = ({ item, index }) => {
  const [counter, setCounter] = useState(-1);

  const { id, machine, coin, status } = item;
  const {
    handleClickAddCoin,
    handleToggleStatus,
    handleNotifyMessage,
    classNameCountDown,
  } = useContext(MachineContexts);

  const padTime = (time) => {
    return String(time).length === 1 ? `0${time}` : `${time}`;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${padTime(minutes)}:${padTime(seconds)}`;
  };

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
      handleToggleStatus(index);
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
    <div className="border border-[#e4e4e4] p-2 shadow-sm relative">
      <div className="flex border-b-[1px] py-2">
        <div className="flex w-full flex-row justify-between">
          {/* machine detail */}
          <div className="flex flex-row">
            <img src={WashingIcon} width={26} />
            <h3 className="text-lg capitalize mx-2">{machine}</h3>
            <h3 className="text-lg">{`MACHINE ${id}`}</h3>
          </div>
          {/* show coin */}
          <div>
            <p className="text-lg">coin : {coin}</p>
          </div>
        </div>
      </div>

      {/* detail */}
      <div className="flex justify-between gap-2 px-1 pt-2">
        {/* status & time */}
        <div>
          <p className="uppercase font-semibold text-lg">
            {status ? "Waiting" : "Ready"}
          </p>
          <p className={classNameCountDown(counter)}>
            {status ? formatTime(counter) : "00:00"}
          </p>
        </div>
        {/* add coin */}
        <button
          disabled={status}
          onClick={() => handleClickAddCoin(index)}
          className="flex w-20 items-center justify-center font-semibold rounded-sm border-0
          bg-green-400 text-white hover:opacity-90 disabled:bg-slate-400 
          disabled:opacity-100"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
