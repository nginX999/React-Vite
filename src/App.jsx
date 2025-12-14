// src/App.jsx
import './App.css';
import Greeting from './Greeting'; // компонент из Примера 1
import UserCard from './UserCard'; // компонент из Примера 2
import TaskList from './TaskList'; // наш новый компонент
function App() {
 return (
 <div className="App">
 {/* компоненты из предыдущих примеров */}
  <Greeting />

 <UserCard
 name="Иван Иванов"
 role="Администратор"
 avatarUrl="https://encrypted-tbn0.gstatic.com/images?
q=tbn:ANd9GcRfVMhpKmVy_-iwfRLAiNiaDslMa-2oEz7KTw&s"
 isOnline={true}
 />

 {/* добавляем компонент списка задач */}
 <TaskList />
 </div>
 );
}
export default App;