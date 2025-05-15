import { TagList } from "silk-task-tracker-ui";
import * as json from "../data/TagListData.json";

export default function TagListComponent() {
    return (
        <TagList tagsList={ json.tagList } tagAction={ undefined }></TagList>
    );
}