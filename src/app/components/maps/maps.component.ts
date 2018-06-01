import { NgModule, Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MapsAPILoader, AgmMap } from '@agm/core';

import { AlertService } from '../../services/alertService';
import { EAlertType } from '../../enums/EAlertType';
import { IAlert} from '../../interfaces/IAlert';

@Component({
    selector: 'maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.css']
})
export class MapsComponent {

    public alerts: Array<IAlert> = new Array<IAlert>();

    @ViewChild(AgmMap)
    public map: AgmMap;

    constructor(private modalService: NgbModal,
                private mapsAPILoader: MapsAPILoader,
                private alertService: AlertService) {}

    private ngOnInit() {
        this.mapResize();
        this.findUserPosition();
    }

    private mapResize() {
        this.map.triggerResize();
    }

    private findUserPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            });
        } else {
            this.alerts.push(this.alertService.criarAlert(EAlertType.Danger, "Ops...", "Não foi possível resolver sua localização."));
        }
    }
}
