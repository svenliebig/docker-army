import * as React from "react"
import { withStyles, AppBar, Toolbar, IconButton, MenuItem, Button, Icon, StyledComponentProps, WithStyles, Theme, Divider, Typography } from "material-ui";
import { Drawer } from "..";

export interface Props extends StyledComponentProps {
    children?: React.ReactNode
}

export interface State {
    leftDrawerOpen: boolean
    rightDrawerOpen: boolean
}

const drawerWidth = 240;
const styles = (theme: Theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        overflow: "hidden"
    },
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
    appBarShiftLeft: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    appBarShiftRight: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginRight: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        marginLeft: -drawerWidth,
        marginRight: -drawerWidth,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    contentShiftLeft: {
        marginLeft: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    contentShiftRight: {
        marginRight: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    flex: {
        flex: 1
    }
})

class Skeleton extends React.Component<Props & WithStyles, State> {

    constructor(props: Props) {
        super(props as any)

        this.state = {
            leftDrawerOpen: false,
            rightDrawerOpen: false
        }
    }

    toggleLeftSidemenu() {
        this.setState({ leftDrawerOpen: !this.state.leftDrawerOpen, rightDrawerOpen: false })
    }

    toggleRightSidemenu() {
        this.setState({ rightDrawerOpen: !this.state.rightDrawerOpen, leftDrawerOpen: false })
    }

    render() {
        const { classes } = this.props
        return (
            <div className={this.props.classes.root}>
                <AppBar className={this.appbarClassNames} color="primary">
                    <Toolbar>
                        <IconButton color="inherit" onClick={this.toggleLeftSidemenu.bind(this)}>
                            <Icon>dehaze</Icon>
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            VCR
                        </Typography>
                        <IconButton color="inherit" onClick={this.toggleRightSidemenu.bind(this)}>
                            <Icon>mail</Icon>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer anchor="left" open={this.state.leftDrawerOpen}>
                    <Divider />
                    Ello
                </Drawer>
                <div className={this.contentClassNames}>
                    <div className={classes.drawerHeader} />
                    {this.props.children}
                </div>
                <Drawer anchor="right" open={this.state.rightDrawerOpen}>
                    <Divider />
                    Ello
                </Drawer>
            </div>
        )
    }

    private get appbarClassNames(): string {
        const classNames: Array<string> = [this.props.classes.appBar]

        if (this.state.leftDrawerOpen) {
            classNames.push(this.props.classes.appBarShiftLeft)
        }

        if (this.state.rightDrawerOpen) {
            classNames.push(this.props.classes.appBarShiftRight)
        }

        return classNames.filter(e => e).join(" ")
    }

    private get contentClassNames(): string {
        const classNames: Array<string> = [this.props.classes.content]

        if (this.state.leftDrawerOpen) {
            classNames.push(this.props.classes.contentShiftLeft)
        }

        if (this.state.rightDrawerOpen) {
            classNames.push(this.props.classes.contentShiftRight)
        }

        return classNames.filter(e => e).join(" ")
    }
}

export default withStyles(styles as any)<Props>(Skeleton)