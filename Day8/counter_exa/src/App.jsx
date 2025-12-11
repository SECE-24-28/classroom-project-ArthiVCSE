import './App.css';
import { DataProvider } from './context/DataContext';
import One from './One';
import Two from './Two';
import Three from './Three';

function App() {
  return (
    <DataProvider>
      <One />
      <Two />
      <Three />
    </DataProvider>
  );
}

export default App;