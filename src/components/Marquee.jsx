import React from 'react'

const Marquee = ({imagesUrl}) => {
  return (
    <div className='flex items-center bg-zinc-300 gap-20 overflow-hidden mt-10'>
        {imagesUrl.map((url, index) => <img key={index} className='' src={url} alt="" />)}
    </div>
  )
}

export default Marquee