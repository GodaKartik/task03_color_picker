import ColorPicker from "./components/ColorPicker";

function App() {
  return (
    <div>
      <ColorPicker
        colors={[
          "red",
          "green",
          "blue",
          "yellow",
          "violet",
          "cyan",
          "orange",
          "purple",
          "pink",
          "darkgreen",
          "#FE6347",
          "brown",
          "#4781B4",
          "#FED700",
        ]}
      />
    </div>
  );
}

export default App;
