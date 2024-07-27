import { useState } from "react"
import Input from "./components/Input"
import Table from "./components/Table"
import { Student } from "./lib"
import Search from "./components/Search"

function App() {
  const [students, setStudents] = useState<Student[]>([])

  return (
    <div className="flex justify-center mt-10 items-center flex-col">
      <Input setStudents={setStudents} />
      <Search setStudents={setStudents}/>
      <Table setStudents={setStudents} students={students} />
    </div>
  )
}

export default App
