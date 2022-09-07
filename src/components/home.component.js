import React, { Component } from "react";

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";




export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }


  render() {
    return (
      <div className="App">
      <AliceCarousel autoPlay autoPlayInterval="800">
        <img  src="/images/img-2.PNG" alt= " 1" class="center" />
        <img  src="/images/Frame.png" alt= " 2" class="center" />
        <img  src="/images/img1.png" alt= " 3"class="center"/>
        
      </AliceCarousel>
      </div>
      
    );
  }

}
