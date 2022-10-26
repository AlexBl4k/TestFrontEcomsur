import React from 'react'

export const Header = () => {
  return (
    <header>
        <div className='cart'>
            <box-icon name="cart"></box-icon>
            <span className='item_total'>0</span>
        </div>
    </header>
  )
}
