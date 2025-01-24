import React, { useState } from "react";
import taskStore from "../../stores/task-store";

const TaskInput = () => {
  const [text, setText] = useState("");
  const {addTask} = taskStore

  const handleAddTask = () => {
    if (text.trim()) {
      addTask(text);
      setText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите задачу"
      />
      <button onClick={handleAddTask}>Добавить</button>
    </div>
  );
};

export default TaskInput;