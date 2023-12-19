import React from 'react'

const Track = ({isPlaying, isActive, activeSong}) => {
  return (
    <div className='flex-1 flex items-center justify-start'>
        <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinte]' : ""}`}>
            <img src="" alt="" />
        </div>
        <div className='w-[50%]'>
            <p>
                {}
            </p>
            <p>
                {}
            </p>
        </div>
    </div>
  )
}

export default Track