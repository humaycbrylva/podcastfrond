import React from 'react'
import SecTwo from './sectwo/SecTwo'
import MainDiv from '../../companents/layout/MainDiv'
import SecOne from './secone/SecOne'
import SecThree from './secthree/SecThree'
import SecFour from './secfour/SecFour'

const Home = () => {
  return (
    <MainDiv>
        <SecOne/>
        <SecTwo/>
        <SecThree/>
        <SecFour/>
    </MainDiv>
  )
}

export default Home