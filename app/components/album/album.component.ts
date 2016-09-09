import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Album } from '../../../Album';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html'
})
export class AlbumComponent {
    private id:string;
    private album:Album[];

    constructor(private _spotifyService:SpotifyService, private _route:ActivatedRoute) {

    }

    ngOnInit() {
        this._route.params.map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.getAlbum(id)
                    .subscribe(album => {
                        console.log(album);
                        this.album = album;
                    })
            })
    }
}
