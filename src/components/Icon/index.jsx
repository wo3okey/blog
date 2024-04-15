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

const CategoryIcon = ({category}) => {
  return (
    <>
    <IconImageWrapper src={`/blog/icons/${category}.png`}></IconImageWrapper> 
    </>
  )
}
export default CategoryIcon
