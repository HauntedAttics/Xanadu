import React, { memo } from 'react'
import { HomeWrapper } from './style'
import { Parallax } from 'react-parallax'
import { DownOutlined } from '@ant-design/icons'

export default memo(function Home() {

  document.documentElement.scrollTop = 0

  const img01 = 'https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/1/37/13776ee0-64c0-11e6-b88e-b72f316c5f3b/57b4d48871f21.image.jpg?resize=1200%2C1253'
  const img02 = 'https://www.neptunepinkfloyd.co.uk/wp-content/uploads/2012/01/443250-19.jpg'
  const img03 = 'https://activeman.gr/wp-content/uploads/2019/05/Led_Zeppelin_01.jpg' 
  const img04 = 'http://yesofcorsa.com/wp-content/uploads/2017/02/Radiohead-Wallpaper-For-Mobile.jpg' 
  
  return (
    <HomeWrapper>

      <div className='body'>
        <div className='container'>
          <h1>
            <span><i>Here</i></span>
            <span><i>I'll</i></span>
            <span><i>show</i></span>
            <span><i>you</i></span>
            <span><i>my</i></span>
            <span><i>favorite</i></span>
            <span><i>bands.</i></span>
            <span><i>🎸</i></span>
            <span><i><DownOutlined style={{ color: '#ccc' }}/></i></span>
          </h1>
        </div>
      </div>

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
            The Beatles were an English rock band formed in Liverpool in 1960. The group, whose best-known line-up comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr, are regarded as the most influential band of all time. They were integral to the development of 1960s counterculture and popular music's recognition as an art form. Rooted in skiffle, beat and 1950s rock and roll, their sound incorporated elements of classical music and traditional pop in innovative ways; the band later explored music styles ranging from ballads and Indian music to psychedelia and hard rock. As pioneers in recording, songwriting and artistic presentation, the Beatles revolutionised many aspects of the music industry and were often publicised as leaders of the era's youth and sociocultural movements.
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
          <h1>Pink Floyd</h1>
          <h2>
            Pink Floyd were an English rock band formed in London in 1964. Gaining an early following as one of the first British psychedelic groups, they were distinguished for their extended compositions, sonic experimentation, philosophical lyrics and elaborate live shows. They became a leading band of the progressive rock genre, cited by some as the greatest progressive rock band of all time.
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
            Led Zeppelin were an English rock band formed in London in 1968. The group consisted of vocalist Robert Plant, guitarist Jimmy Page, bassist/keyboardist John Paul Jones, and drummer John Bonham. With a heavy, guitar-driven sound, they are cited as one of the progenitors of hard rock and heavy metal, although their style drew from a variety of influences, including blues and folk music. Led Zeppelin have been credited as significantly impacting the nature of the music industry, particularly in the development of album-oriented rock (AOR) and stadium rock. Many critics consider Led Zeppelin one of the most innovative and influential rock groups in history.
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
