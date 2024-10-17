import CameraCard from "./components/CameraCard/CameraCard";

function App() {
  return (
    <div className="h-screen bg-[#18a1ad]">
      <div className="absolute w-36 left-0 w-1/2 h-auto">
        <img
          className="w-full h-auto w-80"
          src="./src/assets/images/bg-pattern-top.svg"
        />
      </div>

      <div className="items-center justify-center h-full relative z-10 grid">
        <CameraCard />
      </div>

      <div className="absolute bottom-0 right-0 w-1/2 h-auto ">
        <img
          className="w-full h-auto "
          src="./src/assets/images/bg-pattern-bottom.svg"
        />
      </div>
    </div>
  );
}

export default App;
