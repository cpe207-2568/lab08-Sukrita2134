import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskInput from "./components/TaskInput";
import Task from "./components/Task";
import Footer from "./components/Footer";
import { type TaskCardProps } from "./libs/types";

function App() {
  const Taskcards: TaskCardProps[] = [
    {
      id: 1,
      title: "Read a book",
      description: "Cal + Logic circuit",
      isDone: false,
    },
    {
      id: 2,
      title: "Do homework",
      description: "Com lab + Eng",
      isDone: false,
    },
    {
      id: 3,
      title: "Clean room",
      description: "Weekly cleaning day",
      isDone: false,
    },
  ];

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header />

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าหย */}
        <Sidebar userName="sukrita" type="admin" />

        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            <TaskInput />

            {Taskcards.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                isDone={task.isDone}
              />
            ))}
          </main>
        </div>
      </div>
      
      {/* แสดงชื่อผู้ใช้ด้านล่าง */}
      <Footer
        year="2026"
        fullName="sukrita buasook"
        studentId="670612134"
      />
    </div>
  );
}

export default App;
