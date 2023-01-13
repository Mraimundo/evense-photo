import React from 'react'
import PropTypes from 'prop-types'
import isURLExternal from '../../utils/isURLExternal'

const LinkDuo = props => props.to ? renderAppropriateLink(props, props.siteHost) : <a {...props}>{props.children}</a>

const renderAppropriateLink = (props, siteHost) => {
  const { to, ...rest } = props
  const path = props.to.replace(siteHost, '').replace(/\//, '')

  return isURLExternal(to, siteHost)
    ? <a href={to} {...rest}>{props.children}</a>
    : <a href={'/' + path} {...rest}>{props.children}</a>
}

LinkDuo.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  history: PropTypes.object,
  siteHost: PropTypes.string
}

LinkDuo.defaultProps = {
  siteHost: ''
}

renderAppropriateLink.propTypes = {
  props: PropTypes.object,
  siteHost: PropTypes.string,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

isURLExternal.propTypes = {
  url: PropTypes.string,
  siteHost: PropTypes.string
}

export default LinkDuo
