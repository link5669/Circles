//find a reasonable starting size rather than adding new vertices from 0

import Person from "./Person"

class RelationsGraph {
  numVertices: number = 0
  adjMatrix: number[][] = []

  public addPerson() {
    this.numVertices++
    this.adjMatrix.push(new Array(this.numVertices).fill(0))
    for (let i = 0; i < this.numVertices; i++) {
      this.adjMatrix[i].push(0)
    }
  }

  public addFriend(start: number, end: number) {
    this.adjMatrix[end][start] = 1
  }

  public removeFriend(start: number, end: number) {
    this.adjMatrix[end][start] = 0
  }

  public hasFriend(start: number, end: number) : number {
    return this.adjMatrix[end][start]
  }

  public print() {
    for (let i = 0; i < this.numVertices; i++) {
      let output = ""
      for (let j = 0; j < this.numVertices; j++) {
        output += this.adjMatrix[i][j]
      }
      console.log(output)
    }
  }
  
  public getAllPeople() : Person[] {
    return new Array(this.numVertices).fill(new Person("hello", 1))
  }
}

export default RelationsGraph