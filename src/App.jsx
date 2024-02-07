import './App.css'

import BackgroundImg from './components/BackgroundImg/BackgroundImg'
import Header from './components/Header/Header'
import Advantages from './components/blocks/Advantages/Advantages'
import Feedback from './components/blocks/Feedback/Feedback'
import FirstScreen from './components/blocks/FirstScreen/FirstScreen'
import Footer from './components/blocks/Footer/Footer'
import Master from './components/blocks/Master/Master'
import Portfolio from './components/blocks/Portfolio/Portfolio'

function App() {

  return (
  <>
    <Header /> 
    <BackgroundImg />
    <FirstScreen />
    <Advantages />
    <Master id="master" />
    <Portfolio id="portfolio"/>
    <Feedback id="feedback"/>
    <Footer id="contacts" />
  </>
    
  )
}

export default App
