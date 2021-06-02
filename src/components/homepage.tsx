/** @jsx jsx */
import { jsx, Text, Box } from "theme-ui"
import Layout from "./Layout"
import useThemeConfig from "../hooks/use-theme-config"
// @ts-ignore
import Hero from "../texts/hero"

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

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useThemeConfig()

  return (
    <Layout>
      <section sx={{ mb: [2, 3, 4], p: { fontSize: [1, 2, 3], mt: 2 } }}>
        <Hero />
      </section>
      {/* <Title text="Latest Posts">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>
          Read all posts
        </Link>
      </Title> */}
      {/* <Listing posts={posts} showTags={false} /> */}
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

export default function HomepageWrapper({ ...props }: WrapperProps) {
  const {
    data: { allPost },
  } = props

  return <Homepage posts={allPost.nodes} {...props} />
}
