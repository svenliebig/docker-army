import * as React from "react"
import Input from "../../Components/Input/Input"

export interface Props {
}

export interface State {
}

export default class Dashboard extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Input />
            </div>
        )
    }
}
