import PeopleInfo from "./PeopleInfo";
import RelationsGraph from "./RelationsGraph";

class Singleton {
    private static graph: RelationsGraph = new RelationsGraph()
    private static list: PeopleInfo = new PeopleInfo()

    public static getGraph() : RelationsGraph {
        return Singleton.graph
    }

    public static getList() : PeopleInfo {
        return Singleton.list
    }
}

export default Singleton