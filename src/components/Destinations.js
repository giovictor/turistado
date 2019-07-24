import React,{Component} from 'react'
import axios from 'axios';

import Destination from './Destination';

class Destinations extends Component {
    constructor(props) {
        super(props)
        this.state = {
            destinationImageURLs:[]
        }
    }

    componentDidMount() {
        this.getDestinationImageURLs();
    }

    getDestinationImageURLs = () => {
        axios.get('https://api.unsplash.com/collections/8017160?client_id=4d5cdcd14cd037325eb861b4aa66540725fa48dae825f15628aa0de7aa701d92')
        .then(response => {
            this.setState({destinationImageURLs:response.data.preview_photos});
        }).catch(error => console.log(error))
    }


    render() {
        const {destinationImageURLs} = this.state;
    
        return (
            <div className="destinations">
                <div className="container">
                    <p className="destinationTitle">Top Destinations</p>
                    <p className="destinationTagLine">Some of the top destinations for your next summer adventure.</p>

                    <div className="row topDestinations">
                        {
                            destinationImageURLs.map(destinationImageURL => {
                                return <Destination key={destinationImageURL.id} src={destinationImageURL.urls.thumb}/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Destinations
