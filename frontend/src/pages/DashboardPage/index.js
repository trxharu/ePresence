import React from "react";
import { Button } from "evergreen-ui";

import "./DashboardPage.css";

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
    }

    signOut(e) {
        localStorage.removeItem("token");
        this.props.history.push("/");
    }

    componentDidMount() {
        document.title = "Dashboard | Manage your resume";
        let token = localStorage.getItem("token");
        if (!token) {
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <Button 
                onClick={this.signOut}
                appearance="primary"
                intent="danger"
            >
                Sign Out
            </Button>
        );
    }
}


export default DashboardPage;
