import * as React from "react"
import { withStyles, WithStyles, Drawer as MaterialDrawer, Theme, StyledComponentProps } from "material-ui";

export interface Props extends StyledComponentProps {
    children?: React.ReactNode
    open: boolean
    anchor: "left" | "right"
}

export interface State {
}

const drawerWidth = 240;
const styles = (theme: Theme) => ({
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        backgroundColor: theme.palette.primary.main
    },
    drawerPaper: {
        position: "relative",
        width: drawerWidth,
    },
})

class Drawer extends React.Component<Props & WithStyles<"drawerHeader" | "drawerPaper">, State> {

    constructor(props: Props) {
        super(props as any)

        this.state = {
        }
    }

    render(): JSX.Element {
        const { classes } = this.props
        return (
            <MaterialDrawer anchor={this.props.anchor} variant="persistent" open={this.props.open} classes={{
                paper: classes.drawerPaper,
            }}>
                <div className={classes.drawerHeader} />
                {this.props.children}
            </MaterialDrawer>
        )
    }
}

export default withStyles(styles as any)<Props>(Drawer)