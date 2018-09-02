import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    margin: 'auto',
    width: 600,
  }),
})

function PaperSheet(props) {
  const { classes, children, style } = props
  return (
    <div>
      <Paper className={classes.root} elevation={4} style={style}>
        {children}
      </Paper>
    </div>
  )
}

export default withStyles(styles)(PaperSheet)
