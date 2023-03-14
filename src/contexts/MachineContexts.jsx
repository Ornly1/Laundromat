import React, { createContext, useState } from "react";

// import json file
import machine from "../constants/common.json";

// import Line Notify
import { postLineNotify } from "../api/htppLine";

// export create context
export const MachineContexts = createContext();

const MachineContextsProvider = ({ children }) => {
  const [machines, setMachines] = useState(machine);

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

  const toggleStatus = (index) => {
    const result = machines.map((item, i) => {
      if (i === index) {
        const CurrentCoin = 0;
        return { ...item, coin: CurrentCoin, status: false };
      }
      return item;
    });
    setMachines(result);
  };

  return (
    <MachineContexts.Provider
      value={{
        machines,
        handleClickAddCoin,
        toggleStatus,
        handleNotifyMessage,
      }}
    >
      {children}
    </MachineContexts.Provider>
  );
};

export default MachineContextsProvider;
