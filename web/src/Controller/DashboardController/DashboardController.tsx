import * as React from "react"
import DashboardScene from "../../Scenes/DashboardScene/DashboardScene"

export interface Props {
}

export interface State {
}

export default class DashboardController extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <DashboardScene />
        )
    }
}
