import React, { memo } from 'react'
import { HomeWrapper } from './style'
import { Parallax } from 'react-parallax'
import { DownOutlined } from '@ant-design/icons'

export default memo(function Home() {

  //Back to the top when entering this page.
  document.documentElement.scrollTop = 0

  const img01 = 'https://pic3.zhimg.com/v2-0262305581f89248dc60fdf85e1975a2_r.jpg'
  const img02 = 'https://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/4bed2e738bd4b31cc47a669f8fd6277f9e2ff854.jpg'
  const img03 = 'https://pic2.zhimg.com/v2-be93611ff051c7a9a687c121037f48cd_r.jpg'
  const img04 = 'http://images.wenming.cn/web_wenming/syjj/dfcz/ah/201608/W020160818295011522612.jpg'
  
  return (
    <HomeWrapper>

      <div className='body'>
        <div className='container'>
          <h1>
            <span><i>下 面</i></span>
            <span><i>为</i></span>
            <span><i>您</i></span>
            <span><i>介 绍</i></span>
            <span><i>中 国</i></span>
            <span><i>古 代</i></span>
            <span><i>四 大</i></span>
            <span><i>发 明。</i></span>
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
          <h1>造纸术</h1>
          <h2>
            造纸术相传是由东汉时代的蔡伦（63-121年）所改良，但是也有考古证据说明，造纸术早就存在，蔡伦只是改进造纸术的重要发展者，使造纸的成功率更高，成本更低。造纸术被称为古代四大发明之一，是促使人类文化传播的重要大发明。
            东汉的许慎在他编写中国第一部字典《说文解字》里提到“纸”从“糸”。纸的发明、发展及传播也是经过了一个曲折的过程。 造纸术的发明对于人类文明的传播有巨大的作用，它使得文明的传播速度更便捷、传播成本更低，它促使了纸质书的出现，所以说这是一项极其伟大的发明。
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
          <h1>指南针</h1>
          <h2>
            东汉王充（公元27～约97）《论衡》（明嘉靖版）卷十七是应篇第五十二说“司南之杓，投之于地，其柢指南”，这个记载虽不是最早，但是最早表述清楚的一个。司南具体形式却有很大争议，根据《论衡》以及唐韦肇《瓢赋》中的记载，王振铎判定司南为勺型天然磁石配合地盘，虽有出土汉地盘和河南南阳东汉墓出土石刻司南勺图佐证，但毕竟无完整配合出土。1950年代钱临照试图以天然磁石制做勺形司南，但因天然磁石磁距小、底部摩擦大而未成功。
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
          <h1>火药</h1>
          <h2>
            学术界一般认为火药发明于7世纪的中国，是中国术士为炼制长生不老药而得到的副产品。早在唐代的《太上圣祖金丹秘诀》里，就有了早期火药配方的书面记载。火药的发现导致了烟花的发明和早期火药武器在中国出现。随后火药武器也陆续在阿拉伯、欧洲和印度出现。一般认为欧洲的火药技术是由阿拉伯人传播过去的。西方最早的有关火药的书面记录是由英国哲学家罗吉尔·培根于13世纪记录。
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
          <h1>印刷术</h1>
          <h2>
            活字印刷是由中国北宋1040年的毕昇发明。由当时著名科学家沈括的《梦溪笔谈》记载保存，完整无遗地包括制字、贮字、排版、拆板和刷印等一整套活字印刷术工序，与后世铅字排版的原理完全相同。毕昇发明的胶泥活字印刷经过精心设计，反复试验才获得成功。早期活字印刷品的陆续发现和泥活字实证研究成果，证实了毕昇活字印刷术的真实性和科学性。
          </h2>
        </div>
        <div className='wall' />
      </Parallax>

    </HomeWrapper>
  )
})
