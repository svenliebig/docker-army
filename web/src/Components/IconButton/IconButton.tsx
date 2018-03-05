import * as React from "react"
import { IconButton as MaterialIconButton, Icon, Badge } from "material-ui";

export interface Props {
    children?: React.ReactNode
    onClick(): void
    badge?: number
    icon: string
}

export interface State {
}

export default class IconButton extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
        }
    }

    withBadge(content: any) {
        if (this.props.badge && this.props.badge > 0) {
            return <Badge badgeContent={this.props.badge} color="secondary">{content}</Badge>
        } else {
            return content
        }
    }

    render() {
        return (
            <MaterialIconButton color="inherit" onClick={this.props.onClick}>
                {this.withBadge(<Icon>{this.props.icon}</Icon>)}
            </MaterialIconButton>
        )
    }
}
