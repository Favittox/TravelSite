import React from 'react'
import Beach from './Beach'
import Images from './Images'
import Text from './Text'

export const SecondPage: React.FC = () => {
  return (
    <div className="secondpage">
      <Images />
      <Text />
      <Beach />
    </div>
  )
}
