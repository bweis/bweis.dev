/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { Box, Flex } from "@theme-ui/components"
import kebabCase from "lodash.kebabcase"
import Layout from "./Layout"
import useThemeConfig from "../hooks/use-theme-config"
import SEO from "./SEO"
import replaceSlashes from "../utils/replaceSlashes"
import Link from "./Link"

type PostsProps = {
  list: {
    fieldValue: string
    totalCount: number
  }[]
}

const Tags = ({ list }: PostsProps) => {
  const { tagsPath, basePath } = useThemeConfig()

  return (
    <Layout>
      <SEO title="Tags" />
      <Heading variant="styles.h2">Tags</Heading>
      <Box mt={[4, 5]}>
        {list.map(listItem => (
          <Flex
            key={listItem.fieldValue}
            mb={[1, 1, 2]}
            sx={{ alignItems: `center` }}
          >
            <Link
              sx={{ variant: `links.listItem`, mr: 2 }}
              to={replaceSlashes(
                `/${basePath}/${tagsPath}/${kebabCase(listItem.fieldValue)}`
              )}
            >
              {listItem.fieldValue}{" "}
              <span sx={{ color: `secondary` }}>({listItem.totalCount})</span>
            </Link>
          </Flex>
        ))}
      </Box>
    </Layout>
  )
}

type WrapperProps = {
  data: {
    allPost: {
      group: {
        fieldValue: string
        totalCount: number
      }[]
    }
  }
  [key: string]: any
}

export default function TagsWrapper({ ...props }: WrapperProps) {
  const {
    data: { allPost },
  } = props

  return <Tags list={allPost.group} {...props} />
}
