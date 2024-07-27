import { useState } from "react"
import getRandomID, { Student } from "../../lib"

interface InputProps {
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>
}

function Input({ setStudents }: InputProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [gpa, setGpa] = useState(0)

  const addStudents = () => {
    if (name === "" || email === "") {
      return
    }
    setStudents((prevStudents) => [
      ...prevStudents,
      { id: getRandomID(), name, email, gpa },
    ])
    setName("")
    setEmail("")
    setGpa(0)
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
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="email"
          className="border-2 p-2 text-xl rounded-xl"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </div>
      <div>
        <input
          type="number"
          step={0.1}
          max={5}
          min={1}
          className="border-2 p-2 text-xl rounded-xl w-full"
          value={gpa}
          onChange={(e) => setGpa(e.target.valueAsNumber)}
        />
      </div>
      <div className="text-center">
        <button
          className="p-2 text-xl bg-slate-100 w-full rounded-xl hover:bg-slate-400 ease-in-out duration-200"
          type="submit"
          onClick={addStudents}
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default Input
