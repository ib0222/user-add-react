import { useState } from "react"
import Input from "./components/Input"
import Table from "./components/Table"

function App() {

  const[students,setStudents] = useState([])

  return (
    <div className='flex justify-center mt-10 items-center flex-col'>
      <Input setStudents={setStudents}/>
      <Table students={students}/>
    </div>
  )
}

export default App
