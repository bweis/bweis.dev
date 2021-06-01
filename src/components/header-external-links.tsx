/** @jsx jsx */
import React from "react"
import { jsx, Link as TLink } from "theme-ui"
import useThemeConfig from "../hooks/use-theme-config"

const HeaderExternalLinks = () => {
  const { externalLinks } = useThemeConfig()

  return (
    <React.Fragment>
      {externalLinks && externalLinks.length > 0 && (
        <div sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [1, `18px`] }}>
          {externalLinks.map(link => (
            <TLink key={link.url} href={link.url}>
              {link.name}
            </TLink>
          ))}
        </div>
      )}
    </React.Fragment>
  )
}

export default HeaderExternalLinks
