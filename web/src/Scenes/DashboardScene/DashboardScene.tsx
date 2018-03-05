import * as React from "react"
import Skeleton from "../../Components/Skeleton/Skeleton"
import { Paper, Typography, Theme, withStyles, WithStyles, Icon, Button, AppBar, Tabs, Tab } from "material-ui";
import { Zoom } from "material-ui/transitions";
import SwipeableViews from "react-swipeable-views";

export interface Props {
}

export interface State {
    value: any
}

const styles = (theme: Theme) => ({
    paper: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 5,
    }),
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
    root: {
        position: 'relative',
        flexGrow: 1,
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        backgroundColor: theme.palette.background.paper,
    },
});

class TabContainer extends React.Component<{ children: any, dir: any }> {
    render() {
        return (
            <Typography component="div" dir={this.props.dir} style={{ padding: 8 * 3 }}>
                {this.props.children}
            </Typography>
        )
    }
}

class DashboardScene extends React.Component<Props & WithStyles<"root" | "fab" | "paper">, State> {

    constructor(props: Props) {
        super(props as any)

        this.state = {
            value: 0
        }
    }

    handleChange(event: any, value: any) {
        this.setState({ value });
    }

    handleChangeIndex(index: any) {
        this.setState({ value: index });
    }

    render() {
        const { classes, theme } = this.props;
        const transitionDuration = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen,
        };
        const fab = {
            color: 'primary',
            className: classes.fab,
            icon: <Icon>add</Icon>,
        }

        const tabsCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

        return (
            <Skeleton>
                <div className={classes.root}>
                    <Paper className={this.props.classes.paper} elevation={0}>
                        <Typography variant="headline" component="h3">
                            elevation 0
                    </Typography>
                    </Paper>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange.bind(this)}
                            indicatorColor="primary"
                            textColor="primary"
                            scrollable
                        >
                            {tabsCount.map(val => <Tab key={val} label={`Item ${val}`} />)}
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={this.state.value}
                        onChangeIndex={this.handleChangeIndex.bind(this)}
                    >
                        {tabsCount.map(val => <TabContainer key={val} dir={theme.direction}>Item {val}</TabContainer>)}
                    </SwipeableViews>
                    <Paper className={this.props.classes.paper} elevation={1}>
                        <Typography variant="headline" component="h3">
                            elevation 1
                    </Typography>
                    </Paper>
                    <Paper className={this.props.classes.paper} elevation={5}>
                        <Typography variant="headline" component="h3">
                            elevation 5
                    </Typography>
                    </Paper>
                    <Paper className={this.props.classes.paper} elevation={10}>
                        <Typography variant="headline" component="h3">
                            elevation 10
                    </Typography>
                    </Paper>
                    <Paper className={this.props.classes.paper} elevation={15}>
                        <Typography variant="headline" component="h3">
                            elevation 15
                    </Typography>
                    </Paper>
                    <Paper className={this.props.classes.paper} elevation={20}>
                        <Typography variant="headline" component="h3">
                            elevation 20
                    </Typography>
                    </Paper>
                    <Paper className={this.props.classes.paper} elevation={24}>
                        <Typography variant="headline" component="h3">
                            elevation 24 (maximal)
                    </Typography>
                    </Paper>
                    <Zoom
                        key={fab.color}
                        in={true}
                        timeout={transitionDuration}
                        unmountOnExit
                    >
                        <Button variant="fab" className={fab.className} color="primary">
                            {fab.icon}
                        </Button>
                    </Zoom>
                </div>
            </Skeleton>
        )
    }
}

export default withStyles(styles as any, { withTheme: true })(DashboardScene);