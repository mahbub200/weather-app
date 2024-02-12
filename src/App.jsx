import "./App.css";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

function App() {
  return (
    <div className="h-screen grid place-items-center">
      <Header />
      <main>
        <section className="">
          <WeatherBoard></WeatherBoard>
        </section>
      </main>
    </div>
  );
}

export default App;
