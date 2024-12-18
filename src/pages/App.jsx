import { useState } from "react";
import AddTask from "../components/AddTask";
import AppContent from "../components/AppContent";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import ViewTodos from "../components/ViewTodos";
import "../styles/app.css";

const App = () => {
  const [toDos, setToDos] = useState([
    { text: "walk the dog", completed: false },
    { text: "go for a jog", completed: false },
  ]);

  const addNewToDoHandler = (newTodoText) => {
    setToDos([...toDos].push({ text: newTodoText, status: "not started" }));
  };

  return (
    <div className="app-root">
      <div className="app-header">
        <AppHeader></AppHeader>
      </div>
      <div className="app-content">
        <AppContent>
          <div>
            <AddTask addNewToDo={addNewToDoHandler}></AddTask>
          </div>
          <div>
            <ViewTodos toDos={toDos}></ViewTodos>
          </div>

          {/* <ViewTodos toDos={toDos}></ViewTodos> */}
        </AppContent>
      </div>
      <div className="app-footer">
        <AppFooter></AppFooter>
      </div>
    </div>
  );
};

export default App;
