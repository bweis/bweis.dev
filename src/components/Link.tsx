/** @jsx jsx */
import { jsx, Link as TUILink } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"

const Link = props => {
  const { children, ...rest } = props
  return (
    <TUILink as={GatsbyLink} {...rest}>
      {children}
    </TUILink>
  )
}

export default Link
