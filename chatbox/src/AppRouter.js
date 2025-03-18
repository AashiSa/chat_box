import React from "react";
import { Route, Routes } from "react-router-dom";
import ChatBox from "./components/ChatBox";
// import NotFound from "./components/NotFound";

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<ChatBox />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
  );
};

export default AppRouter;
