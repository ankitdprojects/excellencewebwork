import React from 'react'

const HeadTitle = (props) => {
    document.title = "Excellence Web Work -" + props.title
  return (
    <div className='w-100'>{props.children}</div>
  )
}

export default HeadTitle