import React from "react";
import style from "./todostyle.module.css";
import { db } from "../components/firebase_config"

const IndTodo = ({ todo, inProgress, id }) => {

    const toggleInProgress = () => {
        db.collection("todos").doc(id).update({
            inProgress: false
        })
    }

    const deleteTodo = () => {
        db.collection("todos").doc(id).delete();
    }

    return (
        <div className={style.individualTodo}>
            <div className={style.todoTitle}>
                <h4>{todo}</h4>
                {inProgress ? <p>🚧 Work in progress</p> : <p>✅Work done</p>}
            </div>
            <div className={style.btnHolder}>
                <button onClick={() => toggleInProgress()} className={style.doneBtn}>Done✔️</button>
                <button onClick={() => deleteTodo()} className={style.deleteBtn}>Delete❌</button>
            </div>

        </div>
    );
};

export default IndTodo;
