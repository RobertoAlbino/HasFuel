export interface ILocationBase {     
    lat: number;
    lng: number;
}

export interface IGoogleLocation {
    location: ILocationBase;
}

export interface IPlaceGoogleObject {
    geometry: IGoogleLocation;
    icon: String;
    id: String;
    name: String;
}

export interface IPlaceGoogleResponse {
    results: Array<IPlaceGoogleObject>
}