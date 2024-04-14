import React, { useState, useEffect } from "react"
import styled from "styled-components"
import _ from "lodash"

import { Link } from "gatsby"

const IconImageWrapper = styled.img`
  width: 15px
`

const SeriesWrapper = styled.div`
  margin-bottom: 32px;
  padding: 16px;
  background-color: ${props => props.theme.colors.seriesBackground};
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

const CategoryIcon = ({category}) => {
  return (
    <>
    <IconImageWrapper src={`/icons/${category}.png`}></IconImageWrapper> 
    <SeriesHeader>
      <Link to={`/series/${_.replace(category, /\s/g, "-")}`}>{category}</Link>
    </SeriesHeader>
    </>
  )
}
export default CategoryIcon
