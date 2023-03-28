import React from 'react'

function MemoOne(props) {
  return (
    <div>
      <h1>{props.attr}</h1>
    </div>
  )
}

export default React.memo(MemoOne);
