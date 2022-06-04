import React, { useEffect, useState, useRef } from "react";
import {
  getAllTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} from "../services/index";
import { useDispatch, useSelector } from "react-redux";
import { setTask } from "../redux/actions/listActions";

import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdDone, MdOutlineRestartAlt } from "react-icons/md";


import "./main.scss";

const ItemListing = () => {
  const [contect, setContetn] = useState("");
  const [mode, setMode] = useState(true);
  const [id, setId] = useState(null);

  const [dummy, setDummy] = useState(null);


  const myRef = useRef();

  const listData = useSelector((state) => state.list.taskList);
  const dispatch = useDispatch();

  // Initiate app loading to the redux
  useEffect(() => {
    getAllTodos().then((res) => dispatch(setTask(res.data)));
  }, []);

  //CRUD
  const _createTask = (desc) => {
    createTodo(desc).then((res) => console.log(res));
  };
  const _updateTask = (itemId, desc,status) => {
    updateTodo(itemId, desc, status).then((res) => console.log(res));
  };
  const _deleteTask = (itemId) => {
    deleteTodo(itemId).then((res) => console.log(res));
  };

//MAPPING LIST
  const renderList = listData.map((oneRow) => {
    const { taskId, taskDetails, status } = oneRow;
    var classes = ["details"];
    if (status === "DONE") {
      classes.push("closed");
    }
    return (
      <div className="row">
        <div className="task">{taskId}</div>
        <div className={classes.join(" ")}>{taskDetails}</div>
        <div className="status">
        <form>
          <button
            className="btn"
            onClick={(e) => {
              _updateTask(
                taskId,
                taskDetails,
                status === "DONE" ? "ON_GOING" : "DONE"
              );
            }}
          >
            {status === "DONE" ? <MdOutlineRestartAlt /> : <MdDone />}
          </button>
          </form>
          <button
            className="btn"
            onClick={(e) => {
              setId(taskId);
              setMode(!mode);
            }}
          >
            <FiEdit />
          </button>
          <form>
          <button
            className="btn"
            onClick={(e) => {
              _deleteTask(taskId);
            }
          }
          >
            <RiDeleteBin5Line color="red" />
          </button>
          </form>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="middle-card">
        <div className="title-wrapper">
          <p className="title">TODO List</p>
        </div>
        <div className="add-task-wrapper">
          <form>
            <input
              onChange={(e) => {
                setContetn(e.target.value);
              }}
              ref={myRef}
              className="add-item-input"
              type="text"
              placeholder={mode?"Enter the task": `Replace No ${id}`}
            />
            
            <button className="add-item-btn" onClick={()=>{mode?_createTask(contect):_updateTask(id,contect,"ON_GOING").then(()=>{setMode(true)})}}>
              {mode?"Add to list":"Update Me"}
            </button>
          </form>
        </div>
        <div className="task-list-wrapper">{renderList}</div>
      </div>
    </div>
  );
};

export default ItemListing;
