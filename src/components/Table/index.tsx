import { Student } from "../../lib"

interface TableProps {
  students: Student[]
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>
}

function Table({ students, setStudents }: TableProps) {
  function deleteStudent(id: Student["id"]) {
    const filteredStudents = students.filter((student) => student.id !== id)
    setStudents(filteredStudents)
  }

  return (
    <>
      <div className="relative overflow-x-auto mt-5 rounded-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          {students.length > 0 && (
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  GPA
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Action
                </th>
              </tr>
            </thead>
          )}
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={student.id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {student.id}
                  </th>
                  <td className="px-6 py-4">{student.name}</td>
                  <td className="px-6 py-4">{student.email}</td>
                  <td className="px-6 py-4">{student.gpa}</td>
                  <td className="text-center">
                    <button
                      className="text-xl"
                      onClick={() => deleteStudent(student.id)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <div className="p-4 flex justify-center items-center text-center">
                No student
              </div>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table
