import React,{Component} from 'react';

import Header from './components/Header';
import Destinations from './components/Destinations';
import Subscription from './components/Subscription';
import Footer from './components/Footer';
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
        let bannerImgClasses = ['boracayBanner','elNidoBanner', 'palauiBanner','siargaoBanner'];
        let key = 0;
        setInterval(() => {
            this.setState({bannerImgClass:bannerImgClasses[key++ % bannerImgClasses.length]})
        },3000)
    }

    render() {
        const {bannerImgClass} = this.state;
        return (
            <div className="app">
                <Header bannerImgClass={bannerImgClass}/>
                <Destinations/>
                <Subscription/>
                <Footer/>
            </div>
        );
    }
}

export default App;
