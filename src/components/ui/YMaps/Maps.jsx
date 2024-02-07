// import React from 'react'


export const Maps = () => {
  return (
    <iframe 
      src="https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=false&um=constructor%3Aa2e32158d9bc27e338fb603e02f3b5241aa4ffb962454298b2d4e315a0f5fc07" 
      className="w-full"
      height="300" 
      allowFullScreen={true}
      style={{position:"relative"}}>
    </iframe>
  )
}
