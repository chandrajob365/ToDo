import React from 'react'
import FilterLink from '../container/FilterLink'

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter='ALL'>
      All
    </FilterLink>
    {', '}
    <FilterLink filter='ACTIVE'>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter='COMPLETED'>
      Completed
    </FilterLink>
  </p>
)

export default Footer
