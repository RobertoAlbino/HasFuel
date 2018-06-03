import { NgModule, Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MapsAPILoader, AgmMap, MouseEvent } from '@agm/core';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operator/map';
import { isFunction } from 'util';

import { IPosition } from '../../interfaces/IPosition';
import { HttpService } from '../../services/httpService';
import { IPlaceGoogleResponse, IPlaceGoogleObject } from '../../interfaces/IPlaceGoogleResponse';

@Component({
    selector: 'maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.css']
})
export class MapsComponent {

    @ViewChild(AgmMap)
    public map: AgmMap;
    public gasStationList: Array<IPlaceGoogleObject> = new Array<IPlaceGoogleObject>();
    public userLatitude: Number;
    public userLongitude: Number;

    constructor(private modalService: NgbModal,
        private httpService: HttpService,
        private mapsAPILoader: MapsAPILoader,
        private toastr: ToastrService) { }

    private ngOnInit(): void {
        this.mapResize();
        this.populateMap();
        this.alterZoomMap(12);
        this.setMarkerUserPosition();
    }

    private mapResize(): void {
        this.map.triggerResize();
    }

    private alterZoomMap(value: number): void {
        this.map.zoom = value;
    }

    private browserSupportGetLocalization(): Boolean {
        return navigator.geolocation ? true : false;
    }

    private useCurrentPositionWithCallback(callback: Function): void {
        let posicaoAtual: IPosition;
        if (!isFunction(callback))
            return;

        navigator.geolocation.getCurrentPosition(function (position) {
            posicaoAtual = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            callback(posicaoAtual);
        }), () => {
            this.toastr.error('Não foi possível recuperar a localização atual.', 'Localização atual!');
        };
    }

    private setMapPosition(position: IPosition, callback?: Function) {
        this.map.latitude = position.latitude;
        this.map.longitude = position.longitude;

        if (isFunction(callback))
            callback();
    }

    private populateMap() {
        if (!this.browserSupportGetLocalization())
            this.toastr.error('O seu navegador não possui suporte para localização.', 'Navegador não suportado!');

        this.useCurrentPositionWithCallback((position: IPosition) => {
            this.setMapPosition(position, () => {
                this.getGasStations(this.map.latitude,
                    this.map.longitude,
                    50000,
                    this.gasStationList,
                    (gasStationListOut: Array<IPlaceGoogleObject>,
                        googleLocalResponse: Array<IPlaceGoogleObject>,
                        sucesso: Boolean) => {
                        if (sucesso) {
                            googleLocalResponse.forEach(function (key, value) {
                                debugger;
                                let newGasStation: IPlaceGoogleObject = {
                                    geometry: {
                                        location: {
                                            lat: key.geometry.location.lat,
                                            lng: key.geometry.location.lng
                                        }
                                    },
                                    icon: key.icon,
                                    id: key.id,
                                    name: key.name
                                };
                                gasStationListOut.push(newGasStation);
                            });
                        }
                    });
            });
        });
    }

    private getGasStations(latitude, longitude, radius: Number, gasStationListOut: Array<IPlaceGoogleObject>, callback?: Function): void {
        this.httpService.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCyAR-5ONe_YXfRHwmsBfKUn-EG0zcpoq0&location=${latitude},${longitude}&radius=${radius}&type=gas_station`,
            function (response: IPlaceGoogleResponse, sucesso: Boolean) {
                if (sucesso) {
                    callback(gasStationListOut, response.results, true);
                } else {
                    callback(null, null, false);
                }
            })
    }

    private setMarkerUserPosition() {
        this.useCurrentPositionWithCallback((position: IPosition) => {
            this.userLatitude = position.latitude;
            this.userLongitude = position.longitude;
        });
    }
}
