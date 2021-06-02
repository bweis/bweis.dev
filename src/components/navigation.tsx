/** @jsx jsx */
import React from "react"
import { jsx, Link as TLink } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import Link from "./Link"
import useThemeConfig from "../hooks/use-theme-config"
import replaceSlashes from "../utils/replaceSlashes"

type NavigationProps = {
  nav: {
    title: string
    slug: string
  }[]
}

const Navigation = ({ nav }: NavigationProps) => {
  const { basePath } = useThemeConfig()

  return (
    <React.Fragment>
      {nav && nav.length > 0 && (
        <nav
          sx={{
            "a:not(:last-of-type)": { mr: 3 },
            fontSize: [1, `18px`],
            ".active": { color: `heading` },
          }}
        >
          {nav.map(item => (
            <Link
              key={item.slug}
              activeClassName="active"
              to={replaceSlashes(`/${basePath}/${item.slug}`)}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      )}
    </React.Fragment>
  )
}

export default Navigation
