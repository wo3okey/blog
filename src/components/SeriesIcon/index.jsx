import React, { useState, useEffect } from "react"
import styled from "styled-components"
import _ from "lodash"

const IconImageWrapper = styled.img`
  width: 25px
`

const SeriesIcon = ({category}) => {
  return (
    <>
    <IconImageWrapper src={`/blog/icons/${category}.png`}></IconImageWrapper> 
    </>
  )
}

export default SeriesIcon
