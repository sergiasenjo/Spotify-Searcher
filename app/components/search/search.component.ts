import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent {
    private searchStr:string;
    private searchRes:Artist[];

    constructor(private _spotifyService:SpotifyService) {
        this.searchStr = '';
    }

    searchMusic() {
        this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
            this.searchRes = res.artists.items;
        })
    }
}
