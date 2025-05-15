import { SideMenu } from "silk-task-tracker-ui";
import * as json from "../../../data/SideMenuItems.json";

export default function SideMenuComponent() {
    return (
        <SideMenu SideMenuItems={json.SideMenuItems} action={() => alert('kys')} />
    );
}