import React from "react";
import { useState } from "react";
function Input({setStudents}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addStudents = () => {
    setStudents((prev) => {
      return [...prev,{
        name,email
      }]
    })
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h1 className="text-3xl mb-5">Add User</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="name"
          className="border-2 p-2 text-xl rounded-xl"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="email"
          className="border-2 p-2 text-xl rounded-xl"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <input type="text" className="border-2 p-2 text-xl rounded-xl" />
      </div>
      <div className="text-center">
        <button className="p-2 text-xl bg-slate-100 w-full rounded-xl hover:bg-slate-400 ease-in-out duration-200" onClick={addStudents}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Input;
