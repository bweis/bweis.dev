/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { Flex } from "@theme-ui/components"
import Layout from "./Layout"
import useThemeConfig from "../hooks/use-theme-config"
import Listing from "./Listing"
import replaceSlashes from "../utils/replaceSlashes"
import SEO from "./SEO"
import Link from "./Link"

type TagProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags: {
      name: string
      slug: string
    }[]
  }[]
  pageContext: {
    isCreatedByStatefulCreatePages: boolean
    slug: string
    name: string
    [key: string]: any
  }
}

const Tag = ({ posts, pageContext }: TagProps) => {
  const { tagsPath, basePath } = useThemeConfig()

  return (
    <Layout>
      <SEO title={`Tag: ${pageContext.name}`} />
      <Flex
        sx={{
          alignItems: `center`,
          justifyContent: `space-between`,
          flexFlow: `wrap`,
        }}
      >
        <Heading variant="styles.h2">{pageContext.name}</Heading>
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
    [key: string]: any
  }
  pageContext: {
    isCreatedByStatefulCreatePages: boolean
    slug: string
    name: string
    [key: string]: any
  }
  [key: string]: any
}

export default function TagWrapper({ ...props }: WrapperProps) {
  const {
    data: { allPost },
  } = props

  return <Tag posts={allPost.nodes} {...props} />
}
