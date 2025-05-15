import { Header } from "silk-task-tracker-ui";

export default function HeaderComponent() {
    return (
        <Header
            siteTitle={ "Silk" }
            accountClick={ () => null }
            isLoggedIn={ false }
            loginModifier={ true }
            loginAction={ () => null }
            registerAction={ () => null }
            title={ "" }
            registerName={"Register"}
            loginName={"Log-in"}
        ></Header>
    );
}