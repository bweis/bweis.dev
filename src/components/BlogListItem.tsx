/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Box } from "@theme-ui/components"
import ItemTags from "./ItemTags"
import Link from "./Link"

type BlogListItemProps = {
  post: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }
  showTags?: boolean
}

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => (
  <Box mb={4}>
    <Link to={post.slug} sx={{ fontSize: [1, 2, 3], color: `text` }}>
      {post.title}
    </Link>
    <p
      sx={{
        color: `secondary`,
        mt: 1,
        a: { color: `secondary` },
        fontSize: [1, 1, 2],
      }}
    >
      <time>{post.date}</time>
      {post.tags && showTags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
    </p>
  </Box>
)

export default BlogListItem
