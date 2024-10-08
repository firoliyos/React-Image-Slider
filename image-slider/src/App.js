import ImageSlider from "./components";
export default function App() {
  return (
    <div className="App">
      <ImageSlider 
        url={'https://picsum.photos/v2/list'}
        page={'1'}
        limit={'10'}
      />
    </div>
  );
}

 
