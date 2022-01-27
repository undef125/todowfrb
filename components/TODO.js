import React, { useEffect, useState } from "react";
import style from "./todostyle.module.css";
import { db } from "../pages/firebase_config";
import firebase from "firebase";
import IndTodo from "./IndTodo";

const TODO = () => {
    const [todos, setTodos] = useState([]);

    const [inputValue, setInputValue] = useState(
        "Enter what you want to add..."
    );

    useEffect(() => {
        getTodoFromDb();
    }, []);

    const Submit = () => {
        db.collection("todos").add({
            //sending data to database
            inProgress: true,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            todo: inputValue,
        });
        setInputValue("");
    };

    const getTodoFromDb = () => {
        db.collection("todos").onSnapshot((querySnapshot) => {
            setTodos(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    todo: doc.data().todo,
                    inProgress: doc.data().inProgress,
                }))
            );
        });
    };

    return (
        <div className={style.todoHolder}>
            <div className={style.inputSection}>
                <input
                    type="text"
                    className={style.input}
                    value={inputValue}
                    onFocus={(e) => {
                        e.target.value === "Enter what you want to add..."
                            ? (e.target.value = "")
                            : console.log("all fine!");
                    }}
                    onBlur={(e) => {
                        e.target.value.trim() === ""
                            ? (e.target.value = "Enter what you want to add...")
                            : console.log("all fine!"); 
                    }}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                />

                <button
                    className={style.submitBtn}
                    onClick={(event) => {
                        if(inputValue.trim() === "" || inputValue === "Enter what you want to add...") {
                            alert("Please Enter Something To Add!!");
                        } else Submit();
                    }}
                >
                    Submit
                </button>
            </div>
            <div className={style.todoDisplaySection}>
                {todos?.map(todo => ( 
                    <IndTodo todo={todo.todo} inProgress={todo.inProgress} id={todo.id}></IndTodo>
                ))}
            </div>
        </div>
    );
};

export default TODO;
