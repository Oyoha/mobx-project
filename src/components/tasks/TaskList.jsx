import { observer } from "mobx-react-lite";
import taskStore from "../../stores/task-store";
import TaskInput from "./TaskInput";

export const TaskList = observer(() => {

    const filters = [
        { label: "Все", value: "all" },
        { label: "Выполненные", value: "completed" },
        { label: "Невыполненные", value: "incomplete" },
      ];

    const {filteredTasks} = taskStore


    return(
        <>
            <TaskInput/>
            {filteredTasks.map(task => (
                <div style={{ margin: "8px 0"}}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => taskStore.toggleTask(task.id)}
                  style={{ marginRight: "10px" }}
                />
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    flex: 1,
                  }}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => taskStore.removeTask(task.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Удалить
                </button>
              </div>
            ))}
            <div style={{ margin: "16px 0" }}>
                {filters.map((filter) => (
                    <button
                    key={filter.value}
                    onClick={() => taskStore.setFilter(filter.value)}
                    style={{
                        marginRight: "10px",
                        fontWeight: taskStore.filter === filter.value ? "bold" : "normal",
                    }}
                    >
                    {filter.label}
                    </button>
                ))}
            </div>
        </>
    )

})