import React from 'react'
import Header from './Header'
import Main from './Main'
import Form from './Form'

export const FirstPage: React.FC = () => {
  return (
    <div className="bg">
      <Header/>
      <Main/>
      <Form/>
    </div>
  )
}
