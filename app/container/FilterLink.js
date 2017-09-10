import { connect } from 'react-redux'
import {setVisibilityFilter} from '../actions/action'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  console.log('<FilterLink, mapStateToProps> ownProps = ', ownProps)
  return {
    active: state.filter === ownProps.filter || 'ALL'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
