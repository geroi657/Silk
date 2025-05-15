import HeaderComponent from "../../../widgets/Header/ui/Header.tsx";
import SideMenuComponent from "../../../widgets/SideMenu/ui/SideMenu.tsx";
import TagListComponent from "../../../entities/Taglist/ui/TagList.tsx";
import TaskListComponent from "../../../entities/TaskList/ui/TaskList.tsx";

import "silk-task-tracker-ui/style.css"

export default function MainPage() {
    return (
        <>
            <HeaderComponent/>
            <div style={{ display: "flex", position: "relative", height: "94vh"}}>
                <div style={{ flexShrink: 0 }}>
                    <SideMenuComponent/>
                </div>
                <div style={{ display: "flex", flexDirection: "column", rowGap: "2rem", padding: "2rem", flexShrink: 0, width: "82vw" }} >
                    <TagListComponent />
                    <div style={{ width: "100%" }}>
                        <TaskListComponent/>
                    </div>
                </div>
            </div>
        </>
    );
}