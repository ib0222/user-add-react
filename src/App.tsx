import { useState } from "react"
import Input from "./components/Input"
import Table from "./components/Table"
import { Student } from "./lib"
import Search from "./components/Search"

function App() {
  const [students, setStudents] = useState<Student[]>([])
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([])

  return (
    <div className="flex justify-center mt-10 items-center flex-col mx-auto px-6">
      <div className="max-w-xl w-full mx-auto">
        <Input setStudents={setStudents} />
        <Search setFilteredStudents={setFilteredStudents} students={students} />
      </div>
      <Table setStudents={setStudents} students={filteredStudents} />
    </div>
  )
}

export default App
