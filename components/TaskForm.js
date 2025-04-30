import React, { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, taskToEdit }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      onSubmit({ title });
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">{taskToEdit ? "Update" : "Add"} Task</button>
    </form>
  );
};

export default TaskForm;
