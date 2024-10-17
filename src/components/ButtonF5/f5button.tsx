export default function RefreshButton() {
  const f5button = () => {
    window.location.reload();
  };

  return (
    <button
      className="w-20 h-16 bg-white border-4 border-white rounded-2xl mx-auto"
      onClick={f5button}
    >
      Next Pokemon
    </button>
  );
}
