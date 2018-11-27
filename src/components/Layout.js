import React from 'react'
import { Link } from 'gatsby'


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {children}
      </div>
    )
  }
}

export default Layout
