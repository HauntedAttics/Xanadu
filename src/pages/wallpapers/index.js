import React, { memo, useEffect } from 'react'
import { WallpapersWrapper } from './style'
import { Image, Divider } from 'antd'
import Masonry from 'masonry-layout'

export default memo(function Wallpapers() {

  //Back to the top when entering this page.
  document.documentElement.scrollTop = 0

  //Load Masonry style for each picture after it is loaded.
  useEffect(() => {
    const imagesLoaded = require('imagesloaded')

    const grid = document.querySelector('.grid')

    const masonry = new Masonry(grid, {
      itemSelector: '.grid-item',
      columnWidth: 160,
      gutter: 12,
      fitWidth: true,
      transitionDuration: '0.8s'
    })

    imagesLoaded(grid).on('progress', function () {
      masonry.layout()
    })
  }, [])

  return (
    <WallpapersWrapper>
      <h1>Wallpapers</h1>
      <h2>Here are some wallpapers randomly obtained from Unsplash. Enjoy!</h2>
      <Divider/>
      <div className='grid'>
        <div className='grid-item'><Image src='https://picsum.photos/360/470?radom=25' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/520?radom=27' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/450?radom=26' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/490?radom=28' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/560?radom=29' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/450?radom=32' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/580?radom=33' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/460?radom=34' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/560?radom=35' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/450?radom30' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/540?radom=31' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/560?radom=1' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/480?radom=2' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/550?radom=3' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/450?radom=4' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/520?radom=5' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/460?radom=6' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/520?radom=7' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/540?radom=8' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/460?radom=9' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/550?radom=10' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/480?radom=11' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/520?radom=12' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/560?radom=13' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/480?radom=14' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/550?radom=15' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/520?radom=16' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/500?radom=17' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/520?radom=18' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/460?radom=19' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/560?radom=20' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/480?radom=21' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/520?radom=22' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/510?radom=23' /></div>
        <div className='grid-item'><Image src='https://picsum.photos/360/480?radom=24' /></div>   
        <div className='grid-item'><Image src='https://picsum.photos/360/470?radom=32' /></div>
      </div>
      <Divider/>
    </WallpapersWrapper>
  )
})
