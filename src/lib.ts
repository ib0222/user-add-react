export interface Student {
  id: string
  name: string
  email: string
  gpa: number
}

function getRandomID() {
  const lowercase = "abcdefghijklmnopqrstuvwxyz"
  const uppercase = lowercase.toUpperCase()
  const numbers = "0123456789"
  const symbols = lowercase + uppercase + numbers

  let id = ""

  for (let i = 0; i < 10; i++) {
    const randomIdx = Math.floor(Math.random() * symbols.length)
    id += symbols[randomIdx]
  }

  return id
}

getRandomID()

export default getRandomID
