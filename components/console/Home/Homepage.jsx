import TheHeader from '../../partials/Header'
import Hero from '../../partials/HeroHome'
import How from '../../partials/How'
import FeaturesBlocks from '../Components/TheFeatures.jsx'
import FeaturesWorld from '../Components/World'
import TheCta from '../Components/Cta'
import TheFooter from '../Components/Footer'
import Timeline from '../../partials/Timeline'
import ThriftPeer from '../Components/ThriftPeer'
import Partners from '../Components/Partners'
import News from '../Components/News'
import Team from '../Components/Team'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setDarkMode,
  setLanguageMode,
} from '../../../store/actions/sampleAction'

const Homepage = () => {
  const dispatch = useDispatch()
  const storeState = useSelector((state) => state.reduxData)
  const [darken, setDarken] = useState(storeState.config.darkMode)
  const [language, setLanguage] = useState(
    useSelector((state) => state.reduxData.config.language)
  )
  const setDarkM = (darkMode) => {
    setDarken(darkMode)
    // @ts-ignore
    dispatch(setDarkMode(darkMode))
  }

  const setLang = (lang) => {
    setLanguage(lang)
    dispatch(setLanguageMode(lang))
  }

  return (
    <div
      className={
        'bg-no-repeat bg-right-top ' +
        (darken
          ? 'bg-[url("https://res.cloudinary.com/dhkccnvyn/image/upload/v1658768696/Oval_keoygc.png")]'
          : 'bg-[url("https://res.cloudinary.com/dhkccnvyn/image/upload/v1658768303/Oval_1_supgtn.png")] ')
      }
    >
      <TheHeader
        setDarkModeProp={setDarkM}
        setLang={setLang}
        language={language}
        darkM={darken}
      />
      <center>
        <Hero darkM={darken} />

        <How darkM={darken} />
        <FeaturesBlocks darkM={darken} />
        <ThriftPeer darkM={darken} />
        <Timeline darkM={darken} />
        <FeaturesWorld darkM={darken} />

        <Team darkM={darken} />
        <Partners darkM={darken} />
        <News darkM={darken} />
        <TheCta darkM={darken} />
        <TheFooter darkM={darken} />
      </center>
    </div>
  )
}

export default Homepage
