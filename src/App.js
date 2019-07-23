import React,{Component} from 'react';
import axios from 'axios';

import Header from './components/Header';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerImgClass:''
        }
    }

    componentDidMount() {
        this.getBannerImg();
    }

    getBannerImg = () => {
        let bannerImgIDs = ['boracayBanner','elNidoBanner'];
        let key = 0;
        setInterval(() => {
            this.setState({bannerImgClass:bannerImgIDs[key++ % bannerImgIDs.length]})
        },3000)
    }

    render() {
        const {bannerImgClass} = this.state;
        return (
            <div className="app">
                <Header bannerImgClass={bannerImgClass}/>
            </div>
        );
    }
}

export default App;
