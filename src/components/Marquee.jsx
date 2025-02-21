import React from 'react'

const Marquee = ({imagesUrl}) => {
    console.log(imagesUrl);
  return (
    <div className='flex items-center bg-zinc-300 gap-20 overflow-hidden mt-10'>
        {imagesUrl.map(url => <img className='' src={url} alt="" />)}
    </div>
  )
}

export default Marquee