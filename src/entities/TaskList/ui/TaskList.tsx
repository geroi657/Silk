import { TaskList } from "silk-task-tracker-ui";
import data from "../data/TaskListData.json";

export default function TaskListComponent() {
    return (
            <div style={{display: "flex", columnGap: "2rem", paddingBottom: "2rem", overflowX: "auto", overflowY: "hidden", scrollbarColor: "#424242 #aaaaaa", flexShrink: 0, width: "100%"}}>
                {data.map((item: any) => <TaskList TaskListItems={item.TaskListItems} ListName={"List"} key={Math.floor(Math.random() * 9999)}/>)}
            </div>
)
    ;
}