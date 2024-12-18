import Typography from "@mui/material/Typography";
import "../styles/addtask.css";
import { useState } from "react";

const AddTask = ({ addTaskHandler }) => {
  const [disableAddBtn, setDisableAddBtn] = useState(true);
  const [taskText, setTaskText] = useState("");

  const handleChange = (event) => {
    setTaskText(event.target.value);
    if (event.target.value === "") {
      setDisableAddBtn(true);
    } else {
      setDisableAddBtn(false);
    }
    event.stopPropagation();
  };

  const handleAddBtnClick = () => {
    addTaskHandler(taskText);
    setTaskText("");
  };

  return (
    <div className="add-task-container">
      <div className="add-task-header">
        <Typography variant="h6" componen="h6">
          Add a New Task To Do
        </Typography>
      </div>
      <div className="add-task-content-root">
        <div className="add-task-content-field">
          <label htmlFor="dueDate" className="add-task-content-field-name">
            <Typography variant="body2">Due Date</Typography>
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            required
            className="add-task-content-field-value"
          ></input>
        </div>
        <div className="add-task-content-field">
          <label htmlFor="dueDate" className="add-task-content-field-name">
            <Typography variant="body2">Enter Text</Typography>
          </label>
          <input
            type="text"
            name="task"
            value={taskText}
            onChange={handleChange}
            required
            className="add-task-content-field-value"
          ></input>
        </div>
        <div className="add-task-content-field">
          <input
            id="addBtn"
            type="button"
            name="add"
            value="Add"
            onClick={handleAddBtnClick}
            disabled={disableAddBtn}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
