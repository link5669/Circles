import Person from "./Person"
class PeopleInfo {
    info: Map<string, Person>
    
    constructor() {
        this.info = new Map<string, Person>
    }
    
    public addPerson(name: string) {
        this.info.set(name, new Person(name, this.info.size + 1))
    }

    public getPerson(name: string) {
        this.info.get(name)
    }

}

export default PeopleInfo