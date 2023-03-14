import axios from "axios";

// axios instance
const httpLine = axios.create({
  headers: { Authorization: `Bearer ${import.meta.env.VITE_APP_LINE_TOKEN}` },
});

// axios post
const postLineNotify = async (data) => {
  return await httpLine.post("/api/notify", data);
};

export { postLineNotify };
