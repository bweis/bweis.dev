/** @jsx jsx */

import { jsx, Heading } from "theme-ui"
import Link from "./Link"
import { Flex } from "@theme-ui/components"
import Layout from "./Layout"
import Listing from "./Listing"
import useThemeConfig from "../hooks/use-theme-config"
import replaceSlashes from "../utils/replaceSlashes"
import SEO from "./SEO"

type PostsProps = {
  posts: {
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
  }[]
  [key: string]: any
}

const Blog = ({ posts }: PostsProps) => {
  const { tagsPath, basePath } = useThemeConfig()

  return (
    <Layout>
      <SEO title="Blog" />
      <Flex
        sx={{
          alignItems: `center`,
          justifyContent: `space-between`,
          flexFlow: `wrap`,
        }}
      >
        <Heading variant="styles.h2">Blog</Heading>
        <Link
          sx={{ variant: `links.secondary` }}
          to={replaceSlashes(`/${basePath}/${tagsPath}`)}
        >
          View all tags
        </Link>
      </Flex>
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
    </Layout>
  )
}

type WrapperProps = {
  data: {
    allPost: any
    [key: string]: string
  }
  [key: string]: any
}

export default function BlogWrapper({ ...props }: WrapperProps) {
  const {
    data: { allPost },
  } = props

  return <Blog posts={allPost.nodes} {...props} />
}
