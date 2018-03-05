import * as React from "react"
import Skeleton from "../../Components/Skeleton/Skeleton"
import { Paper, Typography, Theme, withStyles, WithStyles, Icon, Button } from "material-ui";
import { Zoom } from "material-ui/transitions";

export interface Props {
}

export interface State {
}

const styles = (theme: Theme) => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 5,
    }),
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    }
});

class DashboardScene extends React.Component<Props & WithStyles<"root" | "fab">, State> {

    constructor(props: Props) {
        super(props as any)

        this.state = {
        }
    }

    render() {
        const { classes, theme } = this.props;
        const transitionDuration = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen,
        };
        const fab =
            {
                color: 'primary',
                className: classes.fab,
                icon: <Icon>add</Icon>,
            }

        return (
            <Skeleton>
                <Paper className={this.props.classes.root} elevation={0}>
                    <Typography variant="headline" component="h3">
                        elevation 0
                    </Typography>
                </Paper>
                <Paper className={this.props.classes.root} elevation={1}>
                    <Typography variant="headline" component="h3">
                        elevation 1
                    </Typography>
                </Paper>
                <Paper className={this.props.classes.root} elevation={5}>
                    <Typography variant="headline" component="h3">
                        elevation 5
                    </Typography>
                </Paper>
                <Paper className={this.props.classes.root} elevation={10}>
                    <Typography variant="headline" component="h3">
                        elevation 10
                    </Typography>
                </Paper>
                <Paper className={this.props.classes.root} elevation={15}>
                    <Typography variant="headline" component="h3">
                        elevation 15
                    </Typography>
                </Paper>
                <Paper className={this.props.classes.root} elevation={20}>
                    <Typography variant="headline" component="h3">
                        elevation 20
                    </Typography>
                </Paper>
                <Paper className={this.props.classes.root} elevation={24}>
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
            </Skeleton>
        )
    }
}

export default withStyles(styles as any, { withTheme: true })(DashboardScene);