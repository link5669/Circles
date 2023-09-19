import PeopleInfo from "./PeopleInfo";
import RelationsGraph from "./RelationsGraph";

class Singleton {
    private static graph: RelationsGraph
    private static list: PeopleInfo

    public getGraph() {
        return Singleton.graph
    }

    public getList() {
        return Singleton.list
    }
}

export default Singleton