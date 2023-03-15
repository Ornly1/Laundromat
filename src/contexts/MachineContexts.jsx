import React, { createContext, useState } from "react";

// import json file
import machine from "../constants/common.json";

// import post Line Notify
import { postLineNotify } from "../api/htppLine";

// export create context
export const MachineContexts = createContext();

const MachineContextsProvider = ({ children }) => {
  const [machines, setMachines] = useState(machine);

  const handleClickAddCoin = (index) => {
    const result = machines.map((item, i) => {
      if (i === index && item.coin < 30) {
        const currentCoin = item.coin + 10;
        return {
          ...item,
          coin: currentCoin,
          status: currentCoin === 30,
        };
      }
      return item;
    });
    setMachines(result);
  };

  const handleToggleStatus = (index) => {
    const result = machines.map((item, i) => {
      if (i === index) {
        const CurrentCoin = 0;
        return { ...item, coin: CurrentCoin, status: false };
      }
      return item;
    });
    setMachines(result);
  };

  const handleNotifyMessage = async (id) => {
    try {
      const formData = new FormData();
      formData.append("message", `เครื่องที่ ${id} เหลือเวลาอีก 1 นาที`);
      const res = await postLineNotify(formData);
      console.log("res", res);
    } catch (error) {
      console.log("error", error);
    }
  };

  const classNameCountDown = (counter) => {
    if (counter > 0) {
      return "text-lg text-red-500";
    }

    if (counter === -1) {
      return "text-lg text-green-500";
    }
  };

  return (
    <MachineContexts.Provider
      value={{
        machines,
        handleClickAddCoin,
        handleToggleStatus,
        handleNotifyMessage,
        classNameCountDown,
      }}
    >
      {children}
    </MachineContexts.Provider>
  );
};

export default MachineContextsProvider;
