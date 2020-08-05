import React, { Component } from 'react';
import { GET_LIST_FROM_HASHTAG, GET_LIST_ACCESSIBILITY_CAPTION, GET_LATITUDE_LONGITUDE, GET_LIST_ACCESSIBILITY_CAPTION_NEXT_PAGE } from '../../../controller/TableLocationController';
import { createLocationArray } from '../../../utils/Utils'

class TableLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list_accessibility_caption : [],
            list_latitude_longitude : [],
            temp_end_cursor : [],
            promises : [],
            hashtag : this.props.location.hashtag
        }

        this.getLocationFromCaption = this.getLocationFromCaption.bind(this)
        this.getLocationFromCaption2 = this.getLocationFromCaption2.bind(this)
        this.getLatitudeLongitude = this.getLatitudeLongitude.bind(this)
        this.getLocationFromCaptionNextPage = this.getLocationFromCaptionNextPage.bind(this)
        this.callGetLocationFromCaption2 = this.callGetLocationFromCaption2.bind(this)
    }

    componentDidMount(){
        // this.getLocationFromCaption(this.props.location.hashtag)
        // this.callGetLocationFromCaption2(this.props.location.hashtag)
        this.callGetLocationFromCaption2(5, this.props.location.hashtag)
        // this.getCollectedCaption("kopi")
    }
    
    componentDidUpdate(prevProps){
        if (this.props.location.hashtag !== prevProps.location.hashtag){
            // this.getLocationFromCaption(this.props.location.hashtag)
            // this.callGetLocationFromCaption2(this.props.location.hashtag)
            this.callGetLocationFromCaption2(5, this.props.location.hashtag)

        }
    }

    getLocationFromCaption(hashtag){
        let tempLocationArray = []
        GET_LIST_ACCESSIBILITY_CAPTION(hashtag).then(res=>{
            let end_cursor = res.page_info.end_cursor
            tempLocationArray = createLocationArray(res.edges)
            this.setState({
                list_accessibility_caption : tempLocationArray
            })
            console.log(tempLocationArray)
            // this.getLatitudeLongitude(tempLocationArray)
            this.getLocationFromCaptionNextPage(hashtag, end_cursor)
        })
    }

    getLocationFromCaption2(hashtag){
        let tempLocationArray = []
        // let end_cursor = ''
        this.state.promises.push(
            GET_LIST_ACCESSIBILITY_CAPTION(hashtag, this.state.temp_end_cursor).then(res=>{
                // temp.push(res.page_info.end_cursor)
                tempLocationArray = createLocationArray(res.edges)
                this.setState({
                    list_accessibility_caption : [...this.state.list_accessibility_caption, ...tempLocationArray],
                    temp_end_cursor : res.page_info.end_cursor
                })
            })
        )
        // Promise.all(this.state.promises).then(() => console.log(this.state.list_accessibility_caption));
    }

    callGetLocationFromCaption2(angka, hashtag){

        // console.log(this.state.list_accessibility_caption)
        // this.getLocationFromCaption2(hashtag)
        // Promise.all(this.state.promises).then(() => {
        //     console.log(this.state.list_accessibility_caption)
        //     this.getLocationFromCaption2(hashtag);
        //     Promise.all(this.state.promises).then(() => {
        //         console.log(this.state.list_accessibility_caption)
        //         this.getLocationFromCaption2(hashtag);
        //         Promise.all(this.state.promises).then(() => {
        //             console.log(this.state.list_accessibility_caption)
        //             this.getLocationFromCaption2(hashtag);
        //             Promise.all(this.state.promises).then(() => {
        //                 console.log(this.state.list_accessibility_caption)
        //                 this.getLatitudeLongitude(this.state.list_accessibility_caption);
        //             });
        //         });
        //     });
        // });

        if(angka===0){
            console.log(this.state.list_accessibility_caption)
            this.getLatitudeLongitude(this.state.list_accessibility_caption)
            return;
        }
        console.log(angka + hashtag);
        console.log(this.state.list_accessibility_caption)
        this.getLocationFromCaption2(hashtag)
        Promise.all(this.state.promises).then(() => {
            this.callGetLocationFromCaption2(angka-1, hashtag)
        })
    }

    getLatitudeLongitude(location){
        let tempLocation = {
            name : "",
            latitude : "",
            longitude : ""
        }
        // console.log(location)
        location.map((u)=>
            GET_LATITUDE_LONGITUDE(u).then(res => {
                if(res !== undefined){
                    tempLocation = {
                        name : u,
                        latitude : res.lat,
                        longitude : res.lng
                    }
                    this.setState({
                        list_latitude_longitude : [...this.state.list_latitude_longitude, tempLocation]
                    })
                }
            })
        )
    }

    getLocationFromCaptionNextPage(hashtag, end_cursor){
        let tempLocationArray = []
        GET_LIST_ACCESSIBILITY_CAPTION_NEXT_PAGE(hashtag,end_cursor).then(res=>{
            let end_cursor = res.page_info.end_cursor
            tempLocationArray = createLocationArray(res.edges)
            this.setState({
                list_accessibility_caption : [...this.state.list_accessibility_caption,  ...tempLocationArray]
            })
            console.log(tempLocationArray)
            // this.getLocationFromCaptionNextPage(hashtag, end_cursor)
            this.getLatitudeLongitude(this.state.list_accessibility_caption)
        })

        Promise.all(this.state.list_accessibility_caption).then(() => console.log("hi"));
        // this.getLatitudeLongitude(this.state.list_accessibility_caption)
    }
    
    render() {
        return (
            <div>
                <div>
                    {/* {console.log(this.state.list_latitude_longitude)} */}
                    <table class="table mt-3">
                        <thead>
                            <tr>
                            <th scope="col">Number</th>
                            <th scope="col">Name</th>
                            <th scope="col">Latitude</th>
                            <th scope="col">Longitude</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.list_latitude_longitude.map((u, index) =>
                                <tr>
                                    <td>{index}</td>
                                    <td>{u.name}</td>
                                    <td>{u.latitude}</td>
                                    <td>{u.longitude}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TableLocation;