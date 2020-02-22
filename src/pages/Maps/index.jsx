import React, { Component } from "react";
import { Link } from "react-router-dom";
import  PlacesAutocomplete from "./components/places_autocomplete";


import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', flexDirection: 'row', background: '#00aff0'}}>
                <navbar style={{display: 'flex', height: '30px'}}>
                    <span>lknnkn
                    </span>
                </navbar>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{width: '30%', height: '95%' }}>
                    <PlacesAutocomplete>
                    </PlacesAutocomplete>
                    <span>
                        kllbkblb
                    </span>
                    
                </div>
                <div style={{display: 'flex', width: '70%', height: '95%' }}>
                    <Map google={this.props.google} style={{width: '70%', height: '95%' }} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            {/* <h1>{this.state.selectedPlace.name}</h1> */}
                        </div>
                    </InfoWindow>
                    </Map>
                </div>
            </div>
        </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAGUHXaxN34S2ujKm1b7uyDiOyqSZiCfIY")
})(MapContainer)