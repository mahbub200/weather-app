import "./App.css";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherProvider } from "./provider";
import FavouriteProvider from "./provider/FavouriteProvider";

function App() {
  return (
    <WeatherProvider>
      <FavouriteProvider>
        <div className="h-screen grid place-items-center">
          <Header />
          <main>
            <section className="">
              <WeatherBoard></WeatherBoard>
            </section>
          </main>
        </div>
      </FavouriteProvider>
    </WeatherProvider>
  );
}

export default App;
