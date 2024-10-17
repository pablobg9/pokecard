import React from "react";
import CameraCard from "./components/CameraCard/CameraCard";

function App() {
  return (
    <div className="h-screen bg-[#18a1ad]">
      <div className="absolute top-4 left-4 w-96">
        <img
          className="flex items-center justify-center w-full h-auto max-w-none"
          src="./src/assets/images/bg-pattern-top.svg"
        />
      </div>

      <div className="flex items-center justify-center h-full relative z-10">
        <CameraCard />
      </div>

      <div className="flex items-center justify-center absolute bottom-4 right-4 w-">
        <img
          className="w-full h-auto max-w-none"
          src="./src/assets/images/bg-pattern-bottom.svg"
        />
      </div>
    </div>
  );
}

export default App;
