import { Student } from "../../lib"

interface TableProps {
  students: Student[]
}

function Table({ students }: TableProps) {
  return (
    <>
      <div className="relative overflow-x-auto mt-5 rounded-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {student.id}
                </th>
                <td className="px-6 py-4">{student.name}</td>
                <td className="px-6 py-4">{student.email}</td>
                <td className="px-6 py-4">{student.gpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table
