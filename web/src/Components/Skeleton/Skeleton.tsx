import * as React from "react"
import { withStyles, AppBar, Toolbar, IconButton, MenuItem, Button, Icon, StyledComponentProps, WithStyles, Drawer, Theme } from "material-ui";

export interface Props extends StyledComponentProps {
    children?: React.ReactNode
}

export interface State {
    open: boolean
}



const styles = (theme: Theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    drawerPaper: {
        position: ("relative" as any),
        width: 240,
    },
    toolbar: theme.mixins.toolbar
})

class Skeleton extends React.Component<Props & WithStyles<"appBar" | "toolbar" | "drawerPaper">, State> {

    constructor(props: Props) {
        super(props as any)

        this.state = {
            open: false
        }
    }

    toggleSidemenu() {
        this.setState({ open: !this.state.open })
    }

    render() {
        console.log(this.props.classes)
        const { classes } = this.props
        return (
            <div className={this.props.classes.root}>
                <AppBar className={this.props.classes.appBar}>
                    <Toolbar>
                        <IconButton className={this.props.classes.menuButton} onClick={this.toggleSidemenu.bind(this)}>
                            <Icon>star</Icon>
                        </IconButton>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <Drawer anchor="left" variant="persistent" open={this.state.open} classes={{
                    paper: this.props.classes.drawerPaper,
                }}>
                    <div className={classes.toolbar} />
                    Ello
                </Drawer>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)<Props>(Skeleton)