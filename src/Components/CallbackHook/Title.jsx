import React from 'react'

function Title() {
    console.log('Rendring Title')
  return (
    <div>
      <h2>Use Callback Hook</h2>
    </div>
  )
}

export default React.memo(Title)
