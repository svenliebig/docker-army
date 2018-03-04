import * as React from "react"
import Button from "material-ui/Button"

export interface Props {
    children?: React.ReactNode
}

export interface State {
}

export default class Input extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Button variant={"raised"} color={"primary"}>raised primary</Button>
                <Button variant={"flat"} color={"primary"}>flat primary</Button>
                <Button variant={"fab"} color={"primary"}>fab primary</Button>
                <Button variant={"raised"} color={"secondary"}>raised secondary</Button>
                <Button variant={"flat"} color={"secondary"}>flat secondary</Button>
                <Button variant={"fab"} color={"secondary"}>fab secondary</Button>
                <Button variant={"raised"} color={"default"}>raised default</Button>
                <Button variant={"flat"} color={"default"}>flat default</Button>
                <Button variant={"fab"} color={"default"}>fab default</Button>
                <Button variant={"raised"} color={"inherit"}>raised inherit</Button>
                <Button variant={"flat"} color={"inherit"}>flat inherit</Button>
                <Button variant={"fab"} color={"inherit"}>fab inherit</Button>
            </div>
        )
    }
}
