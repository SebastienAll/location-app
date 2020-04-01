// @flow

import React, { Component } from 'react';
import L from 'leaflet';
import { Map, Marker, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';
import './Map.css';
import '../../node_modules/leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import Formulaire from './Formulaire';

/* ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
/* ----------------------------------● TODO PROBLEM CORRECTION
/* ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ */

// Correction du problème de marqueur React-Leaflet :
// Source : https://github.com/Leaflet/Leaflet/issues/4968

let DefaultIcon = L.icon ({
  iconUrl: icon,
  shadowUrl : iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

// Fin de correction du problème, les marqueurs sont maintenant visibles

/* ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
/* ----------------------------------● TODO MAPS ICONS
/* ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ */

// Création de l'icône pour les stations ouvertes & avec des vélos disponibles
export const statusOpen = new L.Icon({
  iconUrl: require('../images/icones/statusOpen.svg'),
  iconRetinaUrl: require('../images/icones/statusOpen.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [50, 50],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
})

// Création de l'icône pour les stations fermées ou n'ayant pas de vélos
export const statusClose = new L.Icon({
  iconUrl: require('../images/icones/statusClose.svg'),
  iconRetinaUrl: require('../images/icones/statusClose.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [50, 50],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
})

/* ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
/* ----------------------------------● TODO MAPS
/* ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ */
class MapStations extends Component {

    state = {

      stations : [],
      selectedStation : {}

    }

    // Fonction pour mettre les marqueurs sur la carte en prenant en compte l'état de la station & son nombre de vélos
    addMarker () {

      return this.props.stations.map((marker, index) => {

        if (marker.status === "OPEN" && marker.available_bikes > 0) {

        return (

            <Marker position={marker.position} key={index} icon={statusOpen} onClick={() => this.editSelectedStation(marker)} >
              
            </Marker>


        )} else {

          return (

            <Marker position={marker.position} key={index} icon={statusClose} onClick={() => this.editSelectedStation(marker)} >
              
            </Marker>

          )

        }

      })

    }

/* ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
/* ----------------------------------● TODO CURRENT MARKER
/* ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ */



    editSelectedStation = (marker) => {
      this.setState({
        selectedStation : {
            // .substring(8) pour enlever les 8 premiers caractères reçue lors de la requête
            name : marker.name.substring(8),
            address : marker.address,
            available_bikes : marker.available_bikes,
            status : marker.status
        }
      })
    }

/* ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
/* ----------------------------------● TODO RETURN FUNCTION
/* ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ */



    render() {

      const {selectedStation} = this.state
      const mapPosition = [43.6010004, 1.4235189];
      const zoom = 14;

      return (
        <div className="containermap">
            <div className="mapPart">
                <Map center={mapPosition} zoom={zoom} maxZoom={20} className="markercluster-map">
                  <TileLayer
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                    attribution="&copy; <a href=&quot;https://stadiamaps.com/&quot;>Stadia Maps</a> contributors"/>
                  <MarkerClusterGroup>
                    {this.addMarker()}
                  </MarkerClusterGroup>
                </Map>
              <div className="formPart">
                <Formulaire 
                  name={selectedStation.name} 
                  address={selectedStation.address} 
                  bikes={selectedStation.available_bikes} 
                  status={selectedStation.status}
                />
            </div>
            </div> 
        </div>
      )

    };


}

export default MapStations;