import QuestionFrom from '@/components/form/QuestionFrom'
import React from 'react'

const AskQuestion = () => {
  return (
    <>
      <h1 className='h1-bold text-dark100_light900'>Ask a Question</h1>

      <div className='mt-9'>
        <QuestionFrom/>
      </div>
    </>
  )
}

export default AskQuestion