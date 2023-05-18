import React, { memo } from 'react'
import { HomeWrapper } from './style'
import { Parallax } from 'react-parallax'
import { DownOutlined } from '@ant-design/icons'

export default memo(function Home() {

  //Back to the top when entering this page.
  document.documentElement.scrollTop = 0

  const img01 = 'https://www.promo-team.de/cds/dezember-13/beatles_box.jpg'
  const img02 = 'https://www.rollingstone.com/wp-content/uploads/2019/04/Autumn-2018-King-Crimson-Line-Up-02.jpg?crop=900:600&width=900'
  const img03 = 'https://ts1.cn.mm.bing.net/th/id/R-C.a2807aaf99fce14124502ba352d73975?rik=1V89IkkjGUnjAQ&riu=http%3a%2f%2fxheni.me%2fimages%2fmusic%2fledzeppelin2.JPG&ehk=%2b8oeeCnewBWxC9QDzUGPX7Yv5%2bLT0lkvwUGq50YanHA%3d&risl=&pid=ImgRaw&r=0'
  const img04 = 'https://yesofcorsa.com/wp-content/uploads/2017/02/Radiohead-Wallpaper-For-Mobile.jpg'
  
  return (
    <HomeWrapper>

      <div className='body'>
        <div className='container'>
          <h1>
            <span><i>Here </i></span>
            <span><i>I'll </i></span>
            <span><i>introduce </i></span>
            <span><i>you </i></span>
            <span><i>my </i></span>
            <span><i>favorite </i></span>
            <span><i>bands. </i></span>
            <span><i>🎸</i></span>
            <span><i><DownOutlined style={{ color: '#ccc' }}/></i></span>
          </h1>
        </div>
      </div>

      {/* Parallax scrolling with blur effects. */}
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img01}
        strength={400}
        justify-content={'center'}
        align-items={'center'}
      >
        <div className='text'>
          <h1>The Beatles</h1>
          <h2>
            The Beatles were an English rock band, formed in Liverpool in 1960, whose best-known line-up comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr. They are regarded as the most influential band of all time and were integral to the development of 1960s counterculture and popular music's recognition as an art form. Rooted in skiffle, beat and 1950s rock and roll, their sound incorporated elements of classical music and traditional pop in innovative ways; the band later explored music styles ranging from ballads and Indian music to psychedelia and hard rock. As pioneers in recording, songwriting and artistic presentation, the Beatles revolutionised many aspects of the music industry and were often publicised as leaders of the era's youth and sociocultural movements.
          </h2>
        </div>
        <div className='wall' />
      </Parallax>

      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img02}
        strength={400}
        justify-content={'center'}
        align-items={'center'}
      >
        <div className='text'>
          <h1>King Crimson</h1>
          <h2>
            King Crimson are a progressive rock band formed in 1968 in London, England. The band draws inspiration from a wide variety of music, incorporating elements of classical, jazz, folk, heavy metal, gamelan, industrial, electronic, experimental music and new wave. They exerted a strong influence on the early 1970s progressive rock movement, including on contemporaries such as Yes and Genesis, and continue to inspire subsequent generations of artists across multiple genres. The band earned a large cult following.
          </h2>
        </div>
        <div className='wall' />
      </Parallax>

      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img03}
        strength={400}
      >
        <div className='text'>
          <h1>Led Zeppelin</h1>
          <h2>
            Led Zeppelin were an English rock band formed in London in 1968. The group consisted of vocalist Robert Plant, guitarist Jimmy Page, bassist/keyboardist John Paul Jones, and drummer John Bonham. With a heavy, guitar-driven sound, they are cited as one of the progenitors of hard rock and heavy metal, although their style drew from a variety of influences, including blues and folk music. Led Zeppelin have been credited as significantly impacting the nature of the music industry, particularly in the development of album-oriented rock (AOR) and stadium rock.
          </h2>
        </div>
        <div className='wall' />
      </Parallax>
      
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img04}
        strength={400}
        justify-content={'center'}
        align-items={'center'}
      >
        <div className='text'>
          <h1>Radiohead</h1>
          <h2>
            Radiohead are an English rock band formed in Abingdon, Oxfordshire, in 1985. The band consists of Thom Yorke (vocals, guitar, piano, keyboards), brothers Jonny Greenwood (lead guitar, keyboards, other instruments) and Colin Greenwood (bass), Ed O'Brien (guitar, backing vocals) and Philip Selway (drums, percussion). They have worked with producer Nigel Godrich and cover artist Stanley Donwood since 1994. Radiohead's experimental approach is credited with advancing the sound of alternative rock.
          </h2>
        </div>
        <div className='wall' />
      </Parallax>

    </HomeWrapper>
  )
})
