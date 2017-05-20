import React,{Component} from 'react'
import { Button } from 'antd-mobile';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import styles from '../../assets/scss/index.scss'

export default class HomeSwiper extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: ['', '', ''],
      initialHeight: window.innerWidth/2.4,
    }
  }
  componentDidMount() {
      this.setState({
        data: [require('../../assets/imgs/swiper.jpg'), require('../../assets/imgs/normal.jpg')],
      });
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.check !== this.props.check ) {
      nextProps.check ?
        this.setState({
          data: [require('../../assets/imgs/swiper.jpg')],
        }) : ''
    }
  }
  render(){
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return(
      <div>
        <img src={require('../../assets/imgs/banner.jpg')} />
        <Carousel
          className="my-carousel"
          autoplay={false}
          infinite
          selectedIndex={1}
          beforeChange={(from, to) => console.log()}
          afterChange={index => console.log()}
          >
            {this.state.data.map(ii => (
              <a href="" key={ii}>
                <img
                  style={hProp}
                  src={ii}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({
                      initialHeight: window.innerWidth/2.4,
                    });
                  }}
                />
              </a>
            ))}
          </Carousel>
      </div>
    )
  }
}
