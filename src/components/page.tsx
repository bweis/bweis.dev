/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./Layout"
import SEO from "./SEO"

type PageProps = {
  data: {
    page: {
      title: string
      slug: string
      excerpt: string
      body: string
    }
  }
  [key: string]: any
}

const Page = ({ data: { page } }: PageProps) => (
  <Layout>
    <SEO title={page.title} description={page.excerpt} />
    <Heading variant="styles.h2">{page.title}</Heading>
    <section sx={{ my: 5, variant: `layout.content` }}>
      <MDXRenderer>{page.body}</MDXRenderer>
    </section>
  </Layout>
)

type WrapperProps = {
  data: {
    page: any
    [key: string]: any
  }
  [key: string]: any
}

export default function PageWrapper({ ...props }: WrapperProps) {
  return <Page {...props} />
}
