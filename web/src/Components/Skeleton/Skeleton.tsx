import * as React from "react"
import { withStyles, AppBar, Toolbar, IconButton, MenuItem, Button, Icon, StyledComponentProps, WithStyles, Drawer, Theme, Divider } from "material-ui";

export interface Props extends StyledComponentProps {
    children?: React.ReactNode
}

export interface State {
    open: boolean
}



const drawerWidth = 240;
const styles = (theme: Theme) => ({
    root: {
        flexGrow: 1,
        display: "flex"
    },
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        color: "white"
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    drawerPaper: {
        position: "relative",
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        marginLeft: -drawerWidth,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    contentShift: {
        marginLeft: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }
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
                <AppBar className={this.appbarClassNames} color="primary">
                    <Toolbar>
                        <IconButton className={this.props.classes.menuButton} onClick={this.toggleSidemenu.bind(this)}>
                            <Icon>dehaze</Icon>
                        </IconButton>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <Drawer anchor="left" variant="persistent" open={this.state.open} classes={{
                    paper: classes.drawerPaper,
                }}>
                    <div className={classes.drawerHeader} />
                    <Divider />
                    Ello
                </Drawer>
                <div className={this.contentClassNames}>
                    <div className={classes.drawerHeader} />
                    {this.props.children}
                </div>
            </div>
        )
    }

    private get appbarClassNames(): string {
        const classNames: Array<string> = [this.props.classes.appBar]

        if (this.state.open) {
            classNames.push(this.props.classes.appBarShift)
        }

        return classNames.filter(e => e).join(" ")
    }

    private get contentClassNames(): string {
        const classNames: Array<string> = [this.props.classes.content]

        if (this.state.open) {
            classNames.push(this.props.classes.contentShift)
        }

        return classNames.filter(e => e).join(" ")
    }
}

export default withStyles(styles as any)<Props>(Skeleton)