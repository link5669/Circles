//find a reasonable starting size rather than adding new vertices from 0

class RelationsGraph {
  numVertices: number
  adjMatrix: number[][]

  constructor(numVertices: number) {
    this.numVertices = numVertices
    this.adjMatrix = []
    for (let i = 0; i < numVertices; i++) {
      this.adjMatrix.push(new Array(numVertices).fill(0))
    }
  }

  public addPerson() {
    this.numVertices++
    this.adjMatrix.push(new Array(this.numVertices).fill(0))
    for (let i = 0; i < this.numVertices; i++) {
      this.adjMatrix[i].push(0)
    }
  }

  addFriend(start: number, end: number) {
    this.adjMatrix[end][start] = 1
  }

  removeFriend(start: number, end: number) {
    this.adjMatrix[end][start] = 0
  }

  hasFriend(start: number, end: number) {
    return this.adjMatrix[end][start]
  }

  print() {
    for (let i = 0; i < this.numVertices; i++) {
      let output = ""
      for (let j = 0; j < this.numVertices; j++) {
        output += this.adjMatrix[i][j]
      }
      console.log(output)
    }
  }
  
  getAllPeople() {
    return
  }
}

export default RelationsGraph