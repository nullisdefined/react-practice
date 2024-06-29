import './App.css'
import Clock from './Clock';
import MyWeather from './MyWeather';
import TodoList from './Todolist';

function App() {
  return (
    <div>
        <TodoList />
        <Clock />
        <MyWeather weather='맑음'>일기예보</MyWeather>-
    </div>
  )
}

export default App
