import { ApiContextProvider } from './context/ApiContext';
import { CurrentWeather } from './components/CurrentWeather';
import { ListDays } from './components/ListDays';

function App() {
  return (
    <ApiContextProvider>
      <div className="App">
        <CurrentWeather /> 
        <ListDays />
      </div>

    </ApiContextProvider>
  );
}

export default App;
