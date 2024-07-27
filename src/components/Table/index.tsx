import { Student } from "../../App"

interface TableProps {
  students: Student[]
}

function Table({ students }: TableProps) {
  return (
    <div className="mt-3">
      {students.map((student) => (
        <div>{student.name}</div>
      ))}
    </div>
  )
}

export default Table
