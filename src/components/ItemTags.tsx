import React from "react"
import useThemeConfig from "../hooks/use-theme-config"
import replaceSlashes from "../utils/replaceSlashes"
import Link from "./Link"

type TagsProps = {
  tags: {
    name: string
    slug: string
  }[]
}

const ItemTags = ({ tags }: TagsProps) => {
  const { tagsPath, basePath } = useThemeConfig()

  return (
    <React.Fragment>
      {tags.map((tag, i) => (
        <React.Fragment key={tag.slug}>
          {!!i && `, `}
          <Link to={replaceSlashes(`/${basePath}/${tagsPath}/${tag.slug}`)}>
            {tag.name}
          </Link>{" "}
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default ItemTags
