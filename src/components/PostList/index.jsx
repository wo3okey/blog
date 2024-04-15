import React, { useState, useEffect } from "react"
import styled from "styled-components"
import _ from "lodash"

import { Link } from "gatsby"

import Title from "components/Title"
import Divider from "components/Divider"
import TagList from "components/TagList"
import CategoryIcon2 from "components/Icon"

const PostListWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`

const PostWrapper = styled.div`
  position: relative;
  top: 0;
  transition: all 0.5s;

  @media (max-width: 768px) {
    padding: 0 5px;
  }
`

const Date = styled.p`
  margin-bottom: 16px;
  font-size: 14.4px;
  color: ${props => props.theme.colors.tertiaryText};
`

const Excerpt = styled.p`
  margin-bottom: 32px;
  line-height: 1.7;
  font-size: 16px;
  color: ${props => props.theme.colors.secondaryText};
  word-break: break-all;
`

const SeriesHeader = styled.span`
  padding-left: 7px;
  font-size: 18px;
  color: ${props => props.theme.colors.text};

  & > span {
    font-weight: normal;
    color: ${props => props.theme.colors.tertiaryText};
  }

  & > a {
    color: inherit;
    text-decoration: none;
  }

  & > a:hover {
    text-decoration: underline;
  }
`

const checkIsScrollAtBottom = () => {
  return (
    document.documentElement.scrollHeight -
      document.documentElement.scrollTop <=
    document.documentElement.clientHeight + 100
  )
}

const PostList = ({ postList }) => {
  const [postCount, setPostCount] = useState(10)

  const handleMoreLoad = _.throttle(() => {
    if (checkIsScrollAtBottom() && postCount < postList.length) {
      setTimeout(() => setPostCount(postCount + 10), 300)
    }
  }, 250)

  useEffect(() => {
    window.addEventListener("scroll", handleMoreLoad)

    return () => {
      window.removeEventListener("scroll", handleMoreLoad)
    }
  }, [postCount, postList])

  useEffect(() => {
    setPostCount(10)
  }, [postList])

  return (
    <PostListWrapper>
      {postList.slice(0, postCount).map((post, i) => {
        const { title, description, date, tags, series } = post.frontmatter
        const { excerpt } = post
        const { slug } = post.fields

        return (
          <>
            <PostWrapper>
              <CategoryIcon2 category={series}></CategoryIcon2>
              <SeriesHeader>
                <Link to={`/series/${_.replace(series, /\s/g, "-")}`}>{series}</Link>
              </SeriesHeader>
              <Title size="bg">
              <Link to={slug}>{title}</Link>
              </Title>
              <Date>{date}</Date>
              {description ? (
                <Excerpt>{description}</Excerpt>
              ) : (
                <Excerpt>{excerpt}</Excerpt>
              )}
              <TagList tagList={tags} />
            </PostWrapper>

            {postCount - 1 !== i && postList.length - 1 !== i && (
              <Divider mt="48px" mb="32px" />
            )}
          </>
        )
      })}
    </PostListWrapper>
  )
}

export default PostList
