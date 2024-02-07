import { Component } from 'react';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';

import './portfolio.scss'

const portfolioData = {
  minimalizm: ['minimalizm1', 'minimalizm2', 'minimalizm3', 'minimalizm4'],
  aquarel: ['aquarel1', 'aquarel2', 'aquarel3', 'aquarel4'],
  newschool: ['newschool1', 'newschool2', 'newschool3', 'newschool4'],
  scetch: ['scetch1', 'scetch2', 'scetch3', 'scetch4'],
  proj: ['proj1', 'proj2', 'proj3', 'proj4'],
};

const getElementFromPortfolio = (category, index) => {
  return portfolioData[category][index];
};

class Portfolio extends Component {
  state = {
    activeCategory: 'minimalizm',
    activeImageIndex: 0,
  };

  handleTabClick = (category) => {
    this.setState({ activeCategory: category, activeImageIndex: 0 });
  };

  handleImageClick = (index) => {
    this.setState({ activeImageIndex: index });
  };

  getCategoryDisplayName = (category) => {
    switch (category) {
      case 'minimalizm':
        return 'Минимализм';
      case 'aquarel':
        return 'Акварель';
      case 'newschool':
        return 'Нью скул';
      case 'scetch':
        return 'Скетч стайл';
      case 'proj':
        return 'Проекты';
      default:
        return '';
    }
  };

  render(){
    return (
      <section className="portfolio relative z-20" id="portfolio">
        <div className="container">
            <SectionTitle title="Портфолио"/>
            <div className="portfolio_content flex flex-col  md:flex-row md:justify-around items-center md:mx-40"> 
                <ul className="portfolio-tabs-header w-max flex flex-col flex-start gap-2 py-5 lg:py-10 lg:gap-5 pl-5">
                  {Object.keys(portfolioData).map((category, index) => (
                    <li
                      key={index}
                      onClick={() => this.handleTabClick(category)}
                      className={`portfolio-tab-btn text-white hover:active hover:opacity-55 text-3xl font-ligh cursor-pointer ${this.state.activeCategory === category ? 'active' : ''}`}
                    >
                      {this.getCategoryDisplayName(category)}
                    </li>
                  ))}
                </ul>
  
                <div className="photogallery flex flex-col items-center md:flex-row gap-2">
                  <div className="w-96 flex justify-center">
                      <img className="w-4/5 md:w-max" src={`./images/portfolio/${getElementFromPortfolio(this.state.activeCategory, this.state.activeImageIndex)}.jpg`} alt="" />
                  </div>
                  <div className="flex items-center w-4/5 md:w-auto md:flex-col pb-5 md:pb-0 ">
                      {portfolioData[this.state.activeCategory].map((element, index) => (
                        <div key={index} className="w-24 cursor-pointer" onClick={() => this.handleImageClick(index)}>
                          <img data-index={index} className={`opacity-50 hover:opacity-100 ${this.state.activeImageIndex === index ? 'active' : ''}`} src={`./images/portfolio/${element}.jpg`} alt="" />
                        </div>
                      ))}
                  </div>
              </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Portfolio;
