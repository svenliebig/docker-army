import * as React from "react"
import Skeleton from "../../Components/Skeleton/Skeleton"

export interface Props {
}

export interface State {
}

export default class DashboardScene extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <Skeleton>
                Content
            </Skeleton>
        )
    }
}
